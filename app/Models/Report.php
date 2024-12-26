<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $fillable = ['title', 'description', 'file_path', 'published_at'];

    public function media()
    {
        return $this->morphMany(Media::class, 'mediable');
    }
}
