@extends('layouts.app')

@section('content')
<div class="container-fluid" style="padding-left:10%; padding-right:10%;">
    <nav class="navbar navbar-light bg-light dash-nav">
        <div class="container">
        <a class="navbar-brand" href="/home">
                <svg class="d-inline-block align-top" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="logo-gradient-b">
                            <stop stop-color="#39D8C8" offset="0%" />
                            <stop stop-color="#BCE4F4" offset="47.211%" />
                            <stop stop-color="#838DEA" offset="100%" />
                        </linearGradient>
                        <path d="M32 16H16v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v14z"
                            id="logo-gradient-a" />
                        <linearGradient x1="23.065%" y1="25.446%" y2="100%" id="logo-gradient-c">
                            <stop stop-color="#1274ED" stop-opacity="0" offset="0%" />
                            <stop stop-color="#1274ED" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                        <mask id="logo-gradient-d" fill="#fff">
                            <use xlink:href="#logo-gradient-a" />
                        </mask>
                        <use fill="url(#logo-gradient-b)" xlink:href="#logo-gradient-a" />
                        <path fill="url(#logo-gradient-c)" mask="url(#logo-gradient-d)"
                            d="M-16-16h32v32h-32z" />
                    </g>
                </svg>
          Routine Management System
        </a>

        <div class="form-inline">
            <a class="text-dark my-2 my-sm-0" style="padding-left:10%;">{{ auth()->user()->name }}</a>
            <a class="text-danger my-2 my-sm-0" style="padding-left:10%;">
                    <form id="logout-form" action="{{ route('logout') }}" method="POST">
                            @csrf
                            <button class="btn text-danger" style="box-shadow:0 0 0 #fff" type="submit"><i class="fas fa-power-off"></i></button>
                        </form>
                </a>
        </div>
    </div>
      </nav>

      <div class="container-fluid my-3" >
    <div class="hero-browser-inner is-revealing">
        <div id="student"></div>
    </div>
</div>
</div>

@endsection
