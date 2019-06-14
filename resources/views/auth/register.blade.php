@extends('layouts.app')

@section('content')
<div class="body-wrap boxed-container">
    <header class="site-header">
        <div class="container">
            <div class="site-header-inner">
                <div class="brand header-brand" style="margin:auto;">
                    <h6 class="m-0">
                        <a href="{{ route('/')}}">
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
                    <h3 class="google-font col-md-12" style="text-align:center"><b>Create a new account</b></h3>
                    <p class="google-font col-md-12" style="text-align:center">Please select your user catagory
                        first</p>

                    <nav>
                        <div class="nav nav-pills" id="nav-tab" role="tablist">
                            <a class="col-sm-6 nav-item nav-link active nav-pill-center" id="nav-student-reg-tab"
                                data-toggle="tab" href="#nav-student-reg" role="tab" aria-controls="nav-student-reg"
                                aria-selected="true">Student</a>
                            <a class="col-sm-6 nav-item nav-link nav-pill-center" style="text-align:center"
                                id="nav-teacher-reg-tab" data-toggle="tab" href="#nav-teacher-reg" role="tab"
                                aria-controls="nav-teacher-reg" aria-selected="false">Teacher</a>
                        </div>
                    </nav>
                    <br>
                    <div class="tab-content row" id="nav-tabContent">
                        <div class="tab-pane fade show active col-md-12" id="nav-student-reg" role="tabpanel"
                            aria-labelledby="nav-student-reg-tab">
                            <form method="POST" action="{{ route('register') }}">
                                @csrf

                                <input type="hidden" id="type" name="type" value="student">

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <input id="name" type="text" placeholder=" Name"
                                            class="form-control @error('name') is-invalid @enderror" name="name"
                                            value="{{ old('name') }}" required autocomplete="name" autofocus>

                                        @error('name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <select class="form-control form-control" name="department" id="department">
                                            <option value="" disabled selected>Department</option>
                                            <option value="FES">FES</option>
                                            <option value="ARC">ARC</option>
                                            <option value="CEP">CEP</option>
                                            <option value="CEE">CEE</option>
                                            <option value="CSE">CSE</option>
                                            <option value="EEE">EEE</option>
                                            <option value="FET">FET</option>
                                            <option value="IPE">IPE</option>
                                            <option value="MEE">MEE</option>
                                            <option value="PME">PME</option>
                                            <option value="BMB">BMB</option>
                                            <option value="GEB">GEB</option>
                                            <option value="BUS">BUS</option>
                                            <option value="CHE">CHE</option>
                                            <option value="GEE">GEE</option>
                                            <option value="MAT">MAT</option>
                                            <option value="OCG">OCG</option>
                                            <option value="PHY">PHY</option>
                                            <option value="STA">STA</option>
                                            <option value="ANT">ANT</option>
                                            <option value="BAN">BAN</option>
                                            <option value="ECO">ECO</option>
                                            <option value="ENG">ENG</option>
                                            <option value="PSS">PSS</option>
                                            <option value="PAD">PAD</option>
                                            <option value="SCW">SCW</option>
                                            <option value="SOC">SOC</option>
                                        </select>
                                        @error('department')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>

                                <input type="hidden" id="designation" name="designation" value="NA">

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <input id="reg_no" type="text" placeholder=" Registration no."
                                            class="form-control @error('reg_no') is-invalid @enderror" name="reg_no"
                                            value="{{ old('reg_no') }}" required autocomplete="reg_no" autofocus>

                                        @error('reg_no')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <input id="session" type="text" placeholder=" Session"
                                            class="form-control @error('session') is-invalid @enderror" name="session"
                                            value="{{ old('session') }}" required autocomplete="session" autofocus>

                                        @error('session')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <input id="email" type="email" placeholder=" Email"
                                            class="form-control @error('email') is-invalid @enderror" name="email"
                                            value="{{ old('email') }}" required autocomplete="email">

                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <input id="password" type="password" placeholder=" Password"
                                            class="form-control @error('password') is-invalid @enderror" name="password"
                                            required autocomplete="new-password">

                                        @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <input id="password-confirm" type="password" placeholder=" Confirm Password"
                                            class="form-control" name="password_confirmation" required
                                            autocomplete="new-password">
                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            {{ __('Register') }}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane fade col-md-12" id="nav-teacher-reg" role="tabpanel"
                            aria-labelledby="nav-teacher-reg-tab">
                            <form method="POST" action="{{ route('register') }}">
                                @csrf

                                <input type="hidden" id="type" name="type" value="teacher">

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <input id="name" type="text" placeholder=" Name"
                                            class="form-control @error('name') is-invalid @enderror" name="name"
                                            value="{{ old('name') }}" required autocomplete="name" autofocus>

                                        @error('name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <select class="form-control form-control" name="department" id="department">
                                            <option value="" disabled selected>Department</option>
                                            <option value="FES">FES</option>
                                            <option value="ARC">ARC</option>
                                            <option value="CEP">CEP</option>
                                            <option value="CEE">CEE</option>
                                            <option value="CSE">CSE</option>
                                            <option value="EEE">EEE</option>
                                            <option value="FET">FET</option>
                                            <option value="IPE">IPE</option>
                                            <option value="MEE">MEE</option>
                                            <option value="PME">PME</option>
                                            <option value="BMB">BMB</option>
                                            <option value="GEB">GEB</option>
                                            <option value="BUS">BUS</option>
                                            <option value="CHE">CHE</option>
                                            <option value="GEE">GEE</option>
                                            <option value="MAT">MAT</option>
                                            <option value="OCG">OCG</option>
                                            <option value="PHY">PHY</option>
                                            <option value="STA">STA</option>
                                            <option value="ANT">ANT</option>
                                            <option value="BAN">BAN</option>
                                            <option value="ECO">ECO</option>
                                            <option value="ENG">ENG</option>
                                            <option value="PSS">PSS</option>
                                            <option value="PAD">PAD</option>
                                            <option value="SCW">SCW</option>
                                            <option value="SOC">SOC</option>
                                        </select>
                                        @error('department')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <select class="form-control form-control" name="designation" id="designation">
                                            <option value="" disabled selected>Designation</option>
                                            <option value="Lecturer">Lecturer</option>
                                            <option value="Assistant Professor">Assistant Professor</option>
                                            <option value="Associate Professor">Associate Professor</option>
                                            <option value="Professor">Professor</option>
                                        </select>
                                    </div>
                                    @error('designation')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>

                                <input type="hidden" id="reg_no" name="reg_no" value="NA">
                                <input type="hidden" id="session" name="session" value="NA">

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <input id="email" type="email" placeholder=" Email"
                                            class="form-control @error('email') is-invalid @enderror" name="email"
                                            value="{{ old('email') }}" required autocomplete="email">

                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <input id="password" type="password" placeholder=" Password"
                                            class="form-control @error('password') is-invalid @enderror" name="password"
                                            required autocomplete="new-password">

                                        @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <input id="password-confirm" type="password" placeholder=" Confirm Password"
                                            class="form-control" name="password_confirmation" required
                                            autocomplete="new-password">
                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            {{ __('Register') }}
                                        </button>
                                    </div>

                                </div>
                            </form>

                        </div>

                        <div class="col-md-12" style="text-align:center; margin-top:5%;">
                            <a href="{{ route('login') }}">Already have an account? Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
