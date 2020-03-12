<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Departament extends Model
{
    //
    protected $table ='departaments';
    protected $fillable =[
      'depart_id','name','cou_id'
    ];
    protected $primaryKey = 'depart_id';
    function countries() {
        return $this->belongsTo('App\Country', 'cou_id', 'country_id');
    }
    function cities() {
        return $this->hasMany('cities', 'city_id');
    }
}
