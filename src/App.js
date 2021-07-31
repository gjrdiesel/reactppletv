import './App.css';

function App() {
  return (
    <div>
      <div class="header">
        <div class="topNav">
          <div>Watch Now</div>
          <div>Share</div>
        </div>
      </div>
      <div class="container">
        <div class="callOut">New episodes fridays</div>
        <h1>Ted Lasso</h1>
        <div class="callOutDetails">
          Comedy &middot;
          Jul 30, 2021 &middot;
          33min
          Apple TV+
        </div>
        <button>Play Again</button>
        <div class="episodeDetails">
          S2 E2 &middot; Lavender: Ted is surprised by
          the reappearance of a familiar face. Roy tries out a new gig.
        </div>
      </div>
      <div class="blackWrapper">
        <div class="episodes">
          <div class="picker">Season 1</div>
          <div class="scroller">
            <img alt="Placeholder" class="item" height="150px" src="https://www.tvinsider.com/wp-content/uploads/2021/01/ted-lasso-season-1-ted-rebecca-1-1014x570.jpg" />
            <img alt="Placeholder" class="item" height="150px" src="https://www.tvinsider.com/wp-content/uploads/2021/01/ted-lasso-season-1-ted-rebecca-1-1014x570.jpg" />
          </div>
        </div>
        <div class="team">
          <div class="picker">Meet the Team</div>
          <div class="scroller">
            <img alt="Placeholder" class="item" height="150px" src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/156671-tv-news-feature-ted-lasso-release-date-cast-trailers-and-rumours-image1-xvmjstufri.jpg" />
            <img alt="Placeholder" class="item" height="150px" src="https://media.tenor.com/images/14d399b89c6bb3496d89e1de859eb15b/tenor.png" />
          </div>
        </div>
        <div class="trailers">
          <div class="picker">Season 1</div>
          <div class="scroller">
            <img alt="Placeholder" class="item" height="150px" src="https://www.tvinsider.com/wp-content/uploads/2021/01/ted-lasso-season-1-ted-rebecca-1-1014x570.jpg" />
            <img alt="Placeholder" class="item" height="150px" src="https://www.tvinsider.com/wp-content/uploads/2021/01/ted-lasso-season-1-ted-rebecca-1-1014x570.jpg" />
          </div>
        </div>
        <div class="grayDetails">
          <h2>About</h2>
          <div class="card">
            <h3>Ted Lasso</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
