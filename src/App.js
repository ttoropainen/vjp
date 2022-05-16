import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div id="container">
        <section id="navigation">
                <nav>
                <ul>
                    <li><a href="#koti">koti</a></li>
                    <li><a href="#quiz">quiz</a></li>
                    <li><a href="#info">info</a></li> 
                    <li><a href="#blogit">blogit</a></li>
                    <li><a href="#some">some</a></li>
                </ul>
                </nav>
        </section>
        <section id="koti">
          <div className="container">
            <h2>Sisäänheittoteksti!</h2>
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
        <section id="info">
        </section>
        <section id="quiz">
        </section>
        <section id="blogit">
          <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nibh eu luctus mattis. Donec tincidunt sollicitudin enim rutrum vulputate. Phasellus quam elit, accumsan nec est et, posuere tempus odio. In ac felis aliquam, bibendum orci non, dapibus augue. Pellentesque bibendum consectetur nisi, ac porta elit tincidunt in. Aliquam nunc massa, eleifend non tortor sit amet, pellentesque bibendum augue. Maecenas vitae sollicitudin ipsum. Pellentesque arcu justo, molestie at justo sit amet, luctus pellentesque ligula.
                Nullam tincidunt commodo augue, pulvinar laoreet mauris sollicitudin maximus. Nam pellentesque vestibulum arcu, quis aliquet turpis malesuada ut. Praesent vel aliquet lectus. Fusce eu odio nec ex convallis sodales. Nunc luctus, erat non laoreet congue, mi quam elementum risus, sit amet rutrum metus elit aliquet leo. Sed scelerisque vitae elit congue ullamcorper. Nam iaculis urna lectus, et posuere mi maximus eu. Suspendisse nec metus eu ex venenatis dapibus
          </div>
        </section>
        <section id="some">
        </section>
        <section id="slogan">
        </section>
      </div>
      </header>
      <footer className="footer">
        <img alt="logo" src="img/kioski.png"></img>
      </footer>
    </div>
  );
}

export default App;
