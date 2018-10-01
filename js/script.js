$(document).ready(function(){
	menu();
	footer();
	menuMobile();
	headerMobile();
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
		$('#menu-mobile').toggleClass('open');
	});

	$('.clickMenu').click(function(){
		if ($('.optsMenu').not($(this).find($('.optsMenu'))).hasClass('open')) {
			$('.optsMenu').not($(this).find($('.optsMenu'))).removeClass('open');
		}
		if ($(this).find(".optsMenu").hasClass('open')) {
			$(this).find(".optsMenu").removeClass('open');
		}else{
			$(this).find(".optsMenu").addClass('open');
		}
	});

	$('.clickProy').click(function(){
		var height = $(this).find(".info > div").height();
		console.log(height)
		if ($('.info').not($(this).find($('.info'))).hasClass('open')) {
			$('.info').not($(this).find($('.info'))).removeClass('open');
			$('.info').not($(this).find($('.arrow'))).removeClass('up');
			$('.info').not($(this).find($('.info'))).css('height',0);
		}
		if ($(this).find(".info").hasClass('open')) {
			$(this).find(".info").removeClass('open');
			$(this).find(".arrow").removeClass('up');
			$(this).find(".info").css('height',0);
		}else{
			$(this).find(".info").addClass('open');
			$(this).find(".arrow").addClass('up');
			$(this).find(".info").css('height', height);
		}
	});
	$('#banner').hover(function(){
		$('.arrows img').css('visibility','visible');
		console.log("hover")
	},function(){
		$('.arrows img').css('visibility','hidden');
		console.log("hover")
	}
	)
	//var myVideo =  iframe.getElementById('videoY'); 
	//myVideo.mute();
});
var pageName = window.location.pathname.split('/')[window.location.pathname.split('/').length-1].substring(0,4)
var pathImg = '';
var path = '';
function menu(){
	console.log(pageName)
	if (pageName == 'bole') {
		pathImg = '../image';
		path = '../';
	}else{
		pathImg = 'image';
	}
	$('header').append(`
		<div class="cont">
			<div class="col-4 float p-0">
				<a href="" target="_blank">
					<img src="`+pathImg+`/logotipos/species.png" alt="species">
				</a>				
			</div>
			<div class="col-8 float p-0">
				<nav class="navbar nav-bar-default p-0 center-cont">
					<div class="container-fluid p-0 center-elem">
						<ul class="nav navbar-right nav-pills">
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
									SPECIES<span class="caret"></span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="`+path+`presentacion.html" class="dropdown-item">Presentación</a>
									</li>
									
								</ul>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
									PUBLICATIONS<span class="caret"></span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="`+path+`progacademicos.html" class="dropdown-item">Programas académicos</a>
									</li>																		
								</ul>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
									DATA SOURCES<span class="caret"></span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="`+path+`eventosProximos.html" class="dropdown-item">Próximos</a>
									</li>																	
								</ul>
							</li>	
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
									DATA TOOLS<span class="caret"></span>
								</a>
								<ul class="dropdown-menu">
									<li>
										<a href="`+path+`eventosProximos.html" class="dropdown-item">Próximos</a>
									</li>																	
								</ul>
							</li>						
						</ul>
					</div>
				</nav>
			</div>
		</div>
	`)
};

function footer(){
	if (pageName == 'bole') {
		pathImg = '../image';
		path = '../';
	}else{
		pathImg = 'image';
	}
	$('footer').append(`
		<div class="container foot">
			<div class="row">
				
				<div class="col-sm-12 col-md-10">
					<br> <br> 
					<strong>
						<h3 class="blanco">Ligas de interés</h3>
					</strong>
					
					
						
							<a href="https://www.unam.mx/" target="_blank" class="tamLinks blanco text-center">
								Universidad Nacional Autónoma de México
							</a>
							<br>
							<a href="http://www.unamenlinea.unam.mx/" target="_blank" class="tamLinks blanco">
								Toda la UNAM en línea
							</a>
							<br>
							<a href="http://www.ddu.unam.mx/" target="_blank" class="tamLinks blanco">
								Defensoría de los Derechos Universitarios
							</a>
							<br>
							<a href="http://www.pudh.unam.mx/" target="_blank" class="tamLinks blanco">
								Programa Universitario de Derechos Humanos UNAM
							</a>
							<br>
							<a href="http://www.transparencia.unam.mx/" target="_blank" class="tamLinks blanco text-right">
								Portal de transparencia
							</a>
							<br>
							<a href="https://www.unam.mx/telefonos-y-medidas-de-emergencia" target="_blank" class="tamLinks blanco">
								Teléfonos de emergencia
							</a>
							<br>
							<a href="http://www.gaceta.unam.mx/" target="_blank" class="tamLinks blanco">
								Gaceta UNAM
							</a> <br>							
						</div>
						
					</div>
					<br>
					<div class="row">
						<div class="col-sm-12 col-md-12 ">
							<p class="blanco">
								Hecho en México, Universidad Nacional Autónoma de México (UNAM), todos los derechos reservados 2017.Esta página y sus contenidos pueden ser reproducidos con fines no lucrativos, siempre y cuando no se mutile, se cite la fuente completa y su dirección electrónica.De otra forma, requiere permiso previo por escrito de la institución. 
								<a href="creditos.html" class="tamLinks blanco">Créditos</a>
							</p>							
						</div>
					</div>
				</div>
			</div>
		</div>
	`);
};

function menuMobile(){
	if (pageName == 'bole') {
		pathImg = '../image';
		path = '../';
	}else{
		pathImg = 'image';
	}
	$('#menu-mobile').append(`
		<div class="cont-menu">			
			<div class="clickMenu">
				<div class="op">SPECIES</div>
				<div id="optsC3" class="optsMenu">
					<div>
						<a href="`+path+`presentacion.html" >
							<div>Presentación</div>
						</a>
					</div>									
				</div>
			</div>
			<div class="clickMenu">
				<div class="op">PUBLICATIONS</div>
				<div id="optsInv" class="optsMenu">
					<a href="`+path+`progacademicos.html" >
						<div>Programas académicos</div>
					</a>					
				</div>
			</div>
			<div class="clickMenu">
				<div class="op">DATA SOURCES</div>
				<div id="optsEvent" class="optsMenu">
					<div>
						<a href="`+path+`eventosProximos.html" >
							<div>Próximos Eventos</div>
						</a>
					</div>					
				</div>
			</div>
			<div class="clickMenu">
				<div class="op">DATA TOOLS</div>
				<div id="optsPro" class="optsMenu">
					<div>
						<a href="`+path+`comnoticias.html" >
							<div>C3 Noticias</div>
						</a>
					</div>
					
				</div>
			</div>			
		</div>
	`);
};

function headerMobile(){
	if (pageName == 'bole') {
		pathImg = '../image';
		path = '../';
	}else{
		pathImg = 'image';
	}
	$('#header-mobile').append(`
		<a href="index.html">
			<img src="`+pathImg+`/logotipos/species.png" alt="SPECIES">
		</a>
		<div id="nav-icon2">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	`);
}