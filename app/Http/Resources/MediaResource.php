<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'type' => $this->type,
            'title' => $this->title,
            'description' => $this->description,
            'url' => $this->url,
            'thumbnail_url' => $this->when($this->type !== 'document', $this->thumbnail_url),
            'embed_url' => $this->when($this->type === 'video', $this->embed_url),
            'file_size' => $this->formatFileSize($this->file_size),
            'category' => $this->category,
            'tags' => $this->tags ? json_decode($this->tags) : [],
            'views_count' => $this->views_count,
            'downloads_count' => $this->downloads_count,
            'is_favorite' => $this->when(auth()->check(), function () {
                return $this->favorites()->where('user_id', auth()->id())->exists();
            }),
            'created_at' => $this->created_at->toISOString(),
            'updated_at' => $this->updated_at->toISOString(),
        ];
    }

    private function formatFileSize($bytes)
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];
        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);
        $bytes /= pow(1024, $pow);
        
        return round($bytes, 2) . ' ' . $units[$pow];
    }
}
