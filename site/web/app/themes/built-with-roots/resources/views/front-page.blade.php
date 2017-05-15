@extends('layouts.app')

@section('content')
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 home-content">
        <div class="home-intro sticky">
          <img src="@asset('/images/logo.svg')" class="img-fluid img-logo">
          @while(have_posts()) @php(the_post())
            @include('partials.content-page')
          @endwhile
        </div>
      </div>
      <div class="col-md-8">
        <app>
          <sites></sites>
        </app>
      </div>
    </div>
  </div>
@endsection
