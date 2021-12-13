<!DOCTYPE html>
<html>
    <head>

        <meta charset="UTF-8">
        <link rel="stylesheet" href="{{ asset('css/register.css') }}">
    </head>
    <body>
        <div class="register">
            <div class="logo">
                <img src="{{ asset('images/logoGit.png') }}" class="logoImg">
                <img src="{{ asset('images/GlobalIt.png') }}" class="logoText">
            </div>
            <button type="submit" class="vector"><img src="vector.png"></button>
            <div id="sub">
                <button id="reg"><p style="margin-top: 0em;">Գրանցվել</p></button>
                <button id="sign">Մուտք</button>
            </div>
            <p id="reg2p">Գրանցվել որպես՝</p>
            <div id="divForm">
                <button type="submit" onclick="window.location.href='{{ route('usanogh.register') }}'" class="buttonForm"><img class="img1" src="us.png"><p class="pForm">Ուսանող </p> </button>

                <button type="submit"  class="buttonForm"><img class="img2" src="{{ asset('images/sch.png') }}"><p class="pForm">Ուս․ հաստատություն</p></button>

                <button type="submit" onclick="window.location.href='{{ route('dasaxos.register') }}'" class="buttonForm"><img class="img3" src="{{ asset('images/teach.png') }}"><p class="pForm">Դասախոս</p></button>

                <button type="submit" onclick="window.location.href='{{ route('gorcatu.register') }}'" class="buttonForm"><img class="img4" src="{{ asset('images/fr.png') }}"><p class="pForm">Ֆրիլանսեր/Գործատու</p></button>

                <button type="submit" onclick="window.location.href='{{ route('hyur.register') }}'" class="buttonForm"><img class="img5" src="{{ asset('images/gh.png') }}"><p class="pForm">Հյուր</p></button>

                <button type="submit"  class="buttonForm"><img class="img6" src="{{ asset('images/kol.png') }}"><p class="pForm">Գործընկեր</p></button>
            </div>
        </div>
    </body>
</html>
