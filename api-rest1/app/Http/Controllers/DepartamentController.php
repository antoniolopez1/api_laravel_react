<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Departament;
use App\Country;

class DepartamentController extends Controller
{
  public function index()
  {
      //
      $department = Departament::join('countries', 'countries.country_id', '=', 'departaments.cou_id')
                                ->select('departaments.*','countries.name as country_name')
                                ->get();
      $depart = json_decode($department, true);
      // $country = Country::join('departaments', 'countries.country_id', '=', 'departaments.cou_id')
      //                     //->where('departaments.depart_id', '=', $department->get('depart'))
      //                     ->get('countries.*');
      //
      // $arrayDepartment = array($department);
      // $arrayCountry = array('country_name' => $country[0]['name']);
      // $departamento = array_merge($arrayDepartment, $arrayCountry);
  // printf($department);
      return response()->json($depart);
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

      $department = new Departament([
        'name' => $request ->get('name'),
        'cou_id' => $request ->get('cou_id')
      ]);


      $department->save();

      return response()->json('Departament Added Successfully.');
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Departament  $country
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
      //
      $department = Departament::find($id);
      $country = Country::join('departaments', 'countries.country_id', '=', 'departaments.cou_id')
                          ->where('departaments.depart_id', '=', $id)
                          ->select('departaments.*', 'countries.name as country_name')
                          ->first();
      // $arrayDepartment = array($department);
      // $arrayCountry = array('country_name' => $country[0]['name']);
      // $departamento = array_merge($arrayDepartment, $arrayCountry);
      return response()->json($country);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Departament  $country
   * @return \Illuminate\Http\Response
   */
  public function edit(Departament $department)
  {
      //
      $department = Departament::find($department);
      return response()->json($department);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Departament  $country
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
      //
      $department = Departament::find($id);
      $department->name=$request->get('name');
      $department->cou_id = $request->get('cou_id');
      $department->save();
      return response()->json('Departament Update Successfully');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Departament  $country
   * @return \Illuminate\Http\Response
   */
  public function destroy($department_id)
  {
      $department = Departament::find($department_id);
      $department->delete();
      return response()->json('Departament Deleted Successfully');
  }
}
