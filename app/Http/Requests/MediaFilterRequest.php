<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MediaFilterRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'type' => 'nullable|string|in:photo,image,video,document,all',
            'category' => 'nullable|string',
            'search' => 'nullable|string|max:100',
            'date_from' => 'nullable|date',
            'date_to' => 'nullable|date|after_or_equal:date_from',
            'min_size' => 'nullable|integer|min:0',
            'max_size' => 'nullable|integer|gt:min_size',
            'sort_by' => 'nullable|string|in:created_at,title,file_size,views_count,downloads_count',
            'sort_order' => 'nullable|string|in:asc,desc',
            'per_page' => 'nullable|integer|min:1|max:100',
            'favorites' => 'nullable|boolean',
        ];
    }
}
