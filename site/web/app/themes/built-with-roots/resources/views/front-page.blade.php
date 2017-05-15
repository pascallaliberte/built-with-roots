@extends('layouts.app')

@section('content')
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <sites></sites>
      </div>
      <div class="col-md-4">
        @while(have_posts()) @php(the_post())
          @include('partials.content-page')
        @endwhile
      </div>
    </div>
  </div>
@endsection
