@extends('layouts.app')

@section('content')
<div class="body-wrap boxed-container">
    <header class="site-header">
        <div class="container">
            <div class="site-header-inner">
                <div class="brand header-brand" style="margin:auto;">
                    <h6 class="m-0">
                        <a href="{{ route('/') }}">
                            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
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
                        </a>


                    </h6>
                    Routine Management System
                </div>
            </div>
        </div>
    </header>

    <div class="hero-browser-inner is-revealing">
        <div class="row">
            <div class="col-md-12">
                <div class="form-box auth-box">
                    <div class="row">
                        <h4 class="google-font center-text col-md-12">Admin Teacher</h4>
                        <form id="logout-form" class="col-md-12 center-text" action="{{ route('logout') }}" method="POST">
                            @csrf
                            <button class="btn btn-primary" type="submit">Logout</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
