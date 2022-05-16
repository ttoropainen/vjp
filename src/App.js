import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div id="container">
        <section id="navigation">
                <nav>
                <ul>
                    <li><a href='#koti'>koti</a></li>
                    <li><a href='#quiz'>quiz</a></li>
                    <li><a href='#info'>info</a></li> 
                    <li><a href='#blogit'>blogit</a></li>
                    <li><a href='#somet'>somet</a></li>
                </ul>
                </nav>
        </section>
        <section id="koti">
        </section>
        <section id="quiz">
        </section>
        <section id="info">
        </section>
        <section id="blogit">
            <div class = "blog"> 
            <img src="img/blogit/kirpparikierros.png" alt="Kirpparikierros" class="blogimage"/>
            <h1>Kirpparikierros Helsingissä</h1>
            <p>Helsinki on täynnä mielenkiintoisia kirpputoreja, joita on tullut vain lisää viime vuosien aikana. Kaupungista löytyy vintage-liikkeita, kahvilallisia trendikirppiksiä, edullisia kierrätyskeskuksia ja suuria katukirppiksiä. Laajasta valikoimasta voi jokainen löytää itselleen mahtavia löytöjä. Tule mukaamme kiertämään Helsingin kiinnostavimmat kirpputorit!</p>
            <button onclick="location.href='#'" type="button">Lue lisää</button>
            </div>
            <div class = "blog">
            <img src="img/blogit/sertifikaatit.png" alt="Sertifikaatit" class="blogimage"/>
            <h1>Näin pidät hyvää huolta vaatteistasi</h1>
            <p>Hyvin huolletut vaatteet kestävät pidempään, mistä kiittää niin lompakko kuin ympäristökin. Pesemällä vaatteet sopivissa lämpötiloissa samanväristen vaatteiden seassa, tahrojen oikeaoppisella puhdistamisella ja huolellisella ripustamisella sekä paikkaamisella pysyvät vaatteet kunnossa vuosi toisensa jälkeen. Näillä helpoilla vinkeillä saat lempivaatteesi kestämään aikaa.</p>
            <button onclick="location.href='#'" type="button">Lue lisää</button>
            </div>
            <div class = "blog">
            <img src="img/blogit/vaatteistahuolehteminen.png" alt="Vaatteista huolehtiminen" class="blogimage"/> 
            <h1>Sertifaattien selitykset - aitoa ekologisuutta vai viherpesua?</h1>
            <p>Vihreät tarrat, puiden kuvat ja kestävyyttä mainostavat lauseet koristavat vaatteiden hintalappuja monien muotiliikkeiden hyllyillä. Monet pikamuotiliikkeet kuuluttavat vaatteidensa vihreyttä itse keksimillään sertifikaateilla, jotka eivät kerro vielä mitään vaatteen todellisesta ekologisuudesta tai eettisyydestä. On kuitenkin olemassa myös monia kansainvälistä tunnustusta saaneita sertifikaatteja, jotka takaavat vaatteen valmistusketjun olevan edes hieman normaalia kestävämpi. Miten kuluttaja voi tunnistaa todellisuudessa ekologisemman valinnan viherpesusta?</p>
            <button onclick="location.href='#'" type="button">Lue lisää</button>
            </div>
        </section>
        <section id="somet">
        </section>
        <section id="slogan">
          <img src="img/slogan/earth 2.svg"/>
        </section>
      </div>
      </header>
    </div>
  );
}

export default App;
