@extends('multiauth::layouts.app') 
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-9">
            <div class="form-box center-text">
                <h3 class="google-font center-text">{{ ucfirst(config('multiauth.prefix')) }} Dashboard</h3>
                @include('multiauth::message')
                     You are logged in to {{ config('multiauth.prefix') }} side!
            </div>
        </div>
    </div>
</div>
@endsection