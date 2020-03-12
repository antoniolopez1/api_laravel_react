<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    //
    protected $table ='cities';
    protected $fillable =[
      'city_id','name','depart_id'
    ];
    protected $primaryKey = 'city_id';
    function departaments() {
        return $this->belongsTo('App\Departament', 'depart_id', 'depart_id');
    }
}
