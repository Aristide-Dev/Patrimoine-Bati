<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $fillable = ['type', 'title', 'url', 'description', 'category', 'embed_url', 'duration'];

    public function mediable()
    {
        return $this->morphTo();
    }
}
