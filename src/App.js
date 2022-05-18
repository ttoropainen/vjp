import './App.css';
import Quiz from './Quiz'


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
          <div className="container">
            <h2>VIHERPESUA VAI VASTUULLISUUTTA?</h2>
            <div>
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/9WGq040-yww`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>
        </section>
        <section id="quiz">
          <div className="quiz">
            <Quiz/>
          </div>
        </section>
        <section id="info">
          <div className="container">
            <div className="textPieces">
            <div className='info'>
                <p style={{backgroundColor:'#628BC7'}}>Yksi T-paita</p>
                <p>Tarvitsee valmistuakseen</p>
                <span className="bold">2700</span>
                <p>litraa vettä</p>
              </div>
              <div className='info'>
                <p style={{backgroundColor:'#86D3AD'}}>Vaateteollisuus aiheuttaa</p>
                <p><span className="bold">10%</span> Maailman hiilidioksidipäästöistä</p>
                <p><span className="bold">20%</span> Maailman jätevedestä</p>
                <p><span className="bold">35%</span> Ympäristöön päästettävistä muovihiukkasista</p>
              </div><br/>
              <div className='info'>
                <p style={{backgroundColor:'#DA8C53'}}>JOS</p>
                <p>Käytät <span className="bold">2x</span> pidempään</p>
                <p>aiheutat <span className="bold">44%</span> vähemmän päästöjä</p>
              </div>
            </div>
          </div>
        </section>
        <section id="blogit">
            <div class = "blog"> 
              <img src="img/blogit/kirpparikierros.png" alt="Kirpparikierros" class="blogimage"/>
              <h1>Kirpparikierros Helsingissä</h1>
              <p>Helsinki on täynnä mielenkiintoisia kirpputoreja, joita on tullut vain lisää viime vuosien aikana. Kaupungista löytyy vintage-liikkeita, kahvilallisia trendikirppiksiä, edullisia kierrätyskeskuksia ja suuria katukirppiksiä. Laajasta valikoimasta voi jokainen löytää itselleen mahtavia löytöjä. Tule mukaamme kiertämään Helsingin kiinnostavimmat kirpputorit!</p>
              <button onclick="location.href='#'" type="button">Lue lisää</button>
            </div>
            <div class = "blog">
              <img src="img/blogit/vaatteistahuolehteminen.png" alt="Vaatteista huolehtiminen" class="blogimage"/> 
              <h1>Näin pidät hyvää huolta vaatteistasi</h1>
              <p>Hyvin huolletut vaatteet kestävät pidempään, mistä kiittää niin lompakko kuin ympäristökin. Pesemällä vaatteet sopivissa lämpötiloissa samanväristen vaatteiden seassa, tahrojen oikeaoppisella puhdistamisella ja huolellisella ripustamisella sekä paikkaamisella pysyvät vaatteet kunnossa vuosi toisensa jälkeen. Näillä helpoilla vinkeillä saat lempivaatteesi kestämään aikaa.</p>
              <button onclick="location.href='#'" type="button">Lue lisää</button>
            </div>
            <div class = "blog">
              <img src="img/blogit/sertifikaatit.png" alt="Sertifikaatit" class="blogimage"/>
              <h1>Sertifaattien selitykset - aitoa ekologisuutta vai viherpesua?</h1>
              <p>Vihreät tarrat, puiden kuvat ja kestävyyttä mainostavat lauseet koristavat vaatteiden hintalappuja monien muotiliikkeiden hyllyillä. Monet pikamuotiliikkeet kuuluttavat vaatteidensa vihreyttä itse keksimillään sertifikaateilla, jotka eivät kerro vielä mitään vaatteen todellisesta ekologisuudesta tai eettisyydestä. On kuitenkin olemassa myös monia kansainvälistä tunnustusta saaneita sertifikaatteja, jotka takaavat vaatteen valmistusketjun olevan edes hieman normaalia kestävämpi. Miten kuluttaja voi tunnistaa todellisuudessa ekologisemman valinnan viherpesusta?</p>
              <button onclick="location.href='#'" type="button">Lue lisää</button>
            </div>
        </section>
        <section id="somet">
          <div id = "ig"> <br/><br/><br/>
            <iframe width="80%" height="100%" src="https://www.instagram.com/p/CdoCvkZIblL/embed" frameborder="0"></iframe><br/>
            <iframe width="80%" height="100%" src="https://www.instagram.com/p/CdoBNxBoUji/embed" frameborder="0"></iframe><br/>
            <iframe width="80%" height="100%" src="https://www.instagram.com/p/Cdn9MgGI5uK/embed" frameborder="0"></iframe>
          </div><br/>
        </section>
          <h2>Löydät meidät myös muista medioista!</h2>
        <section id="somet2">
          <div id="linkit">
            <a href='https://www.tiktok.com/'><img alt="tiktok" src="img/somet/1200px-TikTok_logo.png" id = "tiktok"/></a>
            <a href='https://www.facebook.com/'><img alt="facebook" src="img/somet/facebook.png" id = "facebook"/></a>
            <a href='https://www.youtube.com/'><img alt="youtube" src="img/somet/youtube.png" id = "youtube"/></a>
            <a href='https://www.twitter.com/'><img alt="twitter" src="img/somet/twitter.png"id = "twitter"/></a>
          </div>
        </section>
        <section id="slogan">
          <div class="slogani">
            <h1>
              <span class="slogan-span">Buy</span>
              <span class="slogan-span">nice</span>
              <span class="slogan-span">not</span>
              <span class="slogan-span">twice</span>
              <span class="slogan-span">.</span>
            </h1>
          </div>
        </section>
      </div>
      </header>
      <footer className="footer">
        <img alt="kioski-logo" src="img/kioski.png"></img>
      </footer>
    </div>
  );
}

export default App;
