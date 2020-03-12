<?php

namespace App\Http\Controllers;

use App\City;
use App\Departament;
use Illuminate\Http\Request;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        //
        $city = City::join('departaments', 'departaments.depart_id', '=', 'cities.depart_id')
                                  ->select('cities.*','departaments.name as depart_name')
                                  ->get();
      //  $depart = json_decode($department, true);
        // $country = Country::join('departaments', 'countries.country_id', '=', 'departaments.cou_id')
        //                     //->where('departaments.depart_id', '=', $department->get('depart'))
        //                     ->get('countries.*');
        //
        // $arrayDepartment = array($department);
        // $arrayCountry = array('country_name' => $country[0]['name']);
        // $departamento = array_merge($arrayDepartment, $arrayCountry);
    // printf($department);
        return response()->json($city);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $city = new City([
          'name' => $request ->get('name'),
          'depart_id' => $request ->get('depart_id')
        ]);


        $city->save();

        return response()->json('City Added Successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $city = City::find($id);
        $departament = Departament::join('cities', 'cities.depart_id', '=', 'departaments.depart_id')
                            ->where('cities.city_id', '=', $id)
                            ->select('cities.*', 'departaments.name as depart_name')
                            ->first();
        // $arrayDepartment = array($department);
        // $arrayCountry = array('country_name' => $country[0]['name']);
        // $departamento = array_merge($arrayDepartment, $arrayCountry);
        return response()->json($departament);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function edit(City $city)
    {
        //
        $city = City::find($city);
        return response()->json($city);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        //
        $city = City::find($id);
        $city->name=$request->get('name');
        $city->depart_id = $request->get('depart_id');
        $city->save();
        return response()->json('City Update Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\City  $city
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $city = City::find($id);
        $city->delete();
        return response()->json('City Deleted Successfully');
    }
}
