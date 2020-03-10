<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $table ='countries';
    protected $fillable =[
      'country_id','name','code'
    ];
    protected $primaryKey = 'country_id';
    function departaments() {
        return $this->hasMany('departaments', 'depart_id');
    }
    
}
