@extends('layouts.static')

@section('content')

	<!-- Section 21 - FAQ top -->
	<section id="s21"></section>
	<style>
		.termswrap {
			background-color: #fff;
			padding: 25px;
			margin: 20px;
		}
	</style>
<div class="termswrap">
	@include('terms')
</div>



@endsection

@section('scripts')
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDPwQoFD3ml6tleVfrJF0Wts5_r6kqBLSY&callback=initMap" async defer></script>
	{!! Html::script('js/contact_us_form.js') !!}}
@endsection
