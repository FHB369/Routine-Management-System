<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Routine Management System</title>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,400i|Roboto:500" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/style-for-landing.css')}}">
    <link rel="stylesheet" href="{{ asset('css/app.css')}}">
    <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
</head>

<body class="is-boxed has-animations">
    <div class="body-wrap boxed-container">
        <header class="site-header">
            <div class="container">
                <div class="site-header-inner">
                    <div class="brand header-brand">
                        <h1 class="m-0">
                            <a href="#">
                                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <title>Ava</title>
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
                        </h1>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <section class="hero text-center">
                <div class="container-sm">
                    <div class="hero-inner">
                        <h1 class="hero-title h2-mobile mt-0 is-revealing google-font"><b>Routine Management System</b></h1>
                        @guest
                        <p class="hero-paragraph is-revealing">To get your customized routine join now. Or find general
                            routine below.</p>
                            <div class="hero-form newsletter-form field field-grouped is-revealing"
                                style="padding-left:87px;">
                                <div class="control" style="width:150px">
                                    <a class="button button-primary button-block button-shadow"
                                        style="border-bottom: 3px solid #6ED5EF;" href="/login">Login</a>
                                </div>
                                <div class="control" style="width:150px">
                                    <a class="button button-block button-shadow" style="border-bottom: 3px solid #6ED5EF;"
                                        href="/register">Register</a>
                                </div>
                            </div> 
                        @else
                            <p class="hero-paragraph is-revealing">Welcome back {{ Auth::user()->name}}</p>
                            <div class="hero-form newsletter-form field field-grouped is-revealing"
                                style="padding-left:87px;">
                                <div class="control" style="width:300px">
                                    <a class="button button-primary button-block button-shadow"
                                    style="border-bottom: 3px solid #6ED5EF;" href="{{ route('home')}}">Go to your dashboard</a>
                                </div>
                            </div>
                        @endguest
                        
                        <div class="hero-browser">
                            <div class="bubble-3 is-revealing">
                                <svg width="427" height="286" viewBox="0 0 427 286" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <defs>
                                        <path
                                            d="M213.5 286C331.413 286 427 190.413 427 72.5S304.221 16.45 186.309 16.45C68.396 16.45 0-45.414 0 72.5S95.587 286 213.5 286z"
                                            id="bubble-3-a" />
                                    </defs>
                                    <g fill="none" fill-rule="evenodd">
                                        <mask id="bubble-3-b" fill="#fff">
                                            <use xlink:href="#bubble-3-a" />
                                        </mask>
                                        <use fill="#4E8FF8" xlink:href="#bubble-3-a" />
                                        <path
                                            d="M64.5 129.77c117.913 0 213.5-95.588 213.5-213.5 0-117.914-122.779-56.052-240.691-56.052C-80.604-139.782-149-201.644-149-83.73c0 117.913 95.587 213.5 213.5 213.5z"
                                            fill="#1274ED" mask="url(#bubble-3-b)" />
                                        <path
                                            d="M381.5 501.77c117.913 0 213.5-95.588 213.5-213.5 0-117.914-122.779-56.052-240.691-56.052C236.396 232.218 168 170.356 168 288.27c0 117.913 95.587 213.5 213.5 213.5z"
                                            fill="#75ABF3" mask="url(#bubble-3-b)" />
                                    </g>
                                </svg>
                            </div>
                            <div class="bubble-4 is-revealing">
                                <svg width="230" height="235" viewBox="0 0 230 235" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <defs>
                                        <path
                                            d="M196.605 234.11C256.252 234.11 216 167.646 216 108 216 48.353 167.647 0 108 0S0 48.353 0 108s136.959 126.11 196.605 126.11z"
                                            id="bubble-4-a" />
                                    </defs>
                                    <g fill="none" fill-rule="evenodd">
                                        <mask id="bubble-4-b" fill="#fff">
                                            <use xlink:href="#bubble-4-a" />
                                        </mask>
                                        <use fill="#7CE8DD" xlink:href="#bubble-4-a" />
                                        <circle fill="#3BDDCC" mask="url(#bubble-4-b)" cx="30" cy="108" r="108" />
                                        <circle fill="#B1F1EA" opacity=".7" mask="url(#bubble-4-b)" cx="265" cy="88"
                                            r="108" />
                                    </g>
                                </svg>
                            </div>
                            
                            <div class="bubble-1 is-revealing">
                                <svg width="61" height="52" viewBox="0 0 61 52" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <defs>
                                        <path
                                            d="M32 43.992c17.673 0 28.05 17.673 28.05 0S49.674 0 32 0C14.327 0 0 14.327 0 32c0 17.673 14.327 11.992 32 11.992z"
                                            id="bubble-1-a" />
                                    </defs>
                                    <g fill="none" fill-rule="evenodd">
                                        <mask id="bubble-1-b" fill="#fff">
                                            <use xlink:href="#bubble-1-a" />
                                        </mask>
                                        <use fill="#FF6D8B" xlink:href="#bubble-1-a" />
                                        <path
                                            d="M2 43.992c17.673 0 28.05 17.673 28.05 0S19.674 0 2 0c-17.673 0-32 14.327-32 32 0 17.673 14.327 11.992 32 11.992z"
                                            fill="#FF4F73" mask="url(#bubble-1-b)" />
                                        <path
                                            d="M74 30.992c17.673 0 28.05 17.673 28.05 0S91.674-13 74-13C56.327-13 42 1.327 42 19c0 17.673 14.327 11.992 32 11.992z"
                                            fill-opacity=".8" fill="#FFA3B5" mask="url(#bubble-1-b)" />
                                    </g>
                                </svg>
                            </div>
                            <div class="bubble-2 is-revealing">
                                <svg width="179" height="126" viewBox="0 0 179 126" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <defs>
                                        <path
                                            d="M104.697 125.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S0-28.44 0 12.593c0 41.034 63.663 113.068 104.697 113.068z"
                                            id="bubble-2-a" />
                                    </defs>
                                    <g fill="none" fill-rule="evenodd">
                                        <mask id="bubble-2-b" fill="#fff">
                                            <use xlink:href="#bubble-2-a" />
                                        </mask>
                                        <use fill="#838DEA" xlink:href="#bubble-2-a" />
                                        <path
                                            d="M202.697 211.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S98 57.56 98 98.593c0 41.034 63.663 113.068 104.697 113.068z"
                                            fill="#626CD5" mask="url(#bubble-2-b)" />
                                        <path
                                            d="M43.697 56.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S-61-97.44-61-56.407C-61-15.373 2.663 56.661 43.697 56.661z"
                                            fill="#B1B6F1" opacity=".64" mask="url(#bubble-2-b)" />
                                    </g>
                                </svg>

                            </div>

                            <div class="col-md-12 hero-browser-inner is-revealing">
                                <div id="app_welcome">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="newsletter section">
                <div class="container-sm">
                    <div class="newsletter-inner section-inner">
                        <div class="newsletter-header text-center is-revealing">
                            <h2 class="section-title mt-0"></h2>
                            <p class="section-paragraph"></p>
                        </div>
                        <div class="footer-form newsletter-form field field-grouped is-revealing">
                            <div class="control control-expanded">
                            </div>
                            <div class="control">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="site-footer text-light">
            <div class="container">
                <div class="site-footer-inner">
                    <div class="brand footer-brand">
                        <a href="#">
                            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <title>Ava</title>
                                <defs>
                                    <path d="M32 16H16v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v14z"
                                        id="logo-gradient-footer-a" />
                                    <linearGradient x1="50%" y1="50%" y2="100%" id="logo-gradient-footer-b">
                                        <stop stop-color="#FFF" stop-opacity="0" offset="0%" />
                                        <stop stop-color="#FFF" offset="100%" />
                                    </linearGradient>
                                </defs>
                                <g fill="none" fill-rule="evenodd">
                                    <mask id="logo-gradient-footer-c" fill="#fff">
                                        <use xlink:href="#logo-gradient-footer-a" />
                                    </mask>
                                    <use fill-opacity=".32" fill="#FFF" xlink:href="#logo-gradient-footer-a" />
                                    <path fill="url(#logo-gradient-footer-b)" mask="url(#logo-gradient-footer-c)"
                                        d="M-16-16h32v32h-32z" />
                                </g>
                            </svg>

                        </a>
                    </div>
                    <ul class="footer-links list-reset">
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                    </ul>
                    <ul class="footer-social-links list-reset">
                        <li>
                            <a href="#">
                                
                            </a>
                        </li>
                        <li>
                            <a href="#">
                               
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                
                            </a>
                        </li>
                    </ul>
                    <div class="footer-copyright">&copy; 2019 Team Sirius, all rights reserved</div>
                </div>
            </div>
        </footer>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/main-for-landing.min.js')}}"></script>
</body>

</html>
