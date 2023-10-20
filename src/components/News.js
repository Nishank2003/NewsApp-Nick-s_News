import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Karen DeYoung, Ana Vanessa Herrero",
      title:
        "Biden eases Venezuela oil sanctions after Maduro signs election deal - The Washington Post",
      description:
        "The announcement came a day after the government of President Nicolás Maduro and the U.S.-backed opposition agreed to terms for a competitive presidential election next year.",
      url: "https://www.washingtonpost.com/world/2023/10/18/biden-eases-venezuela-oil-sanctions/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6VJ667GHEHSJVXQ5I4NFKKDMCQ.JPG&w=1440",
      publishedAt: "2023-10-19T03:22:55Z",
      content:
        "Comment on this story\r\nComment\r\nThe Biden administration on Wednesday eased oil, gas and gold sanctions against Venezuela a day after the government of President Nicolás Maduro and the U.S.-backed op… [+5534 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Therese Poletti",
      title:
        "Tesla's Cybertruck has Elon Musk sounding unusually cautious - MarketWatch",
      description:
        "Tesla CEO tempers expectations, cites ‘enormous challenges’ in reaching volume production and making the Cybertruck cash-flow positive",
      url: "https://www.marketwatch.com/story/teslas-cybertruck-has-elon-musk-sounding-unusually-cautious-for-once-290dbb62",
      urlToImage: "https://images.mktw.net/im-623782/social",
      publishedAt: "2023-10-19T03:07:00Z",
      content:
        "Elon Musk was uncharacteristically cautious about Tesla Inc.s next big vehicle Wednesday, and his comments may lead some on Wall Street to lower their initial expectations for the Cybertruck.The sci-… [+3678 chars]",
    },
    {
      source: {
        id: null,
        name: "KTRK-TV",
      },
      author: null,
      title:
        "Astros play by play: Houston jumps out to lead, claim Game 3 vs. Texas Rangers; Altuve's home run gives him 1st hit of series - KTRK-TV",
      description:
        "Jose Altuve finally has a hit in the championship series, and it was a blast!",
      url: "https://abc13.com/astros-schedule-playoffs-what-time-does-the-play-vs-rangers-score-cristian-javier/13931210/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/13937019_101823-ktrk-ap-altuve-game-3-pointing-img.jpg?w=1600",
      publishedAt: "2023-10-19T02:57:40Z",
      content:
        "ARLINGTON, Texas (KTRK) -- For the first time in the American League Championship Series, the Houston Astros held a lead against the Texas Rangers in Game 3 and sustained it, giving the defending Wor… [+6763 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Rob Picheta",
      title:
        "Gaza hospital blast: What we know so far about the Al-Alhi Baptist Hospital attack - CNN",
      description:
        "A deadly blast at a Gaza hospital on Tuesday provided another devastating reminder of the colossal human cost of the roiling war unfolding between Israel and Hamas. CNN has not been able to verify either side’s account independently, and the cause of the blas…",
      url: "https://www.cnn.com/2023/10/18/middleeast/gaza-hospital-explosion-israel-wwk-explainer-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/231018123108-01-israel-gaza-101823-gaza-city.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-10-19T02:45:00Z",
      content:
        "A day after a deadly blast tore through Al-Ahli Baptist Hospital in Gaza, sparking protests across the region, the United States has released its own assessment of what caused the devastation.\r\nIsrae… [+6935 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Las Vegas Aces celebrate their 2nd consecutive WNBA championship 🎉 - ESPN",
      description:
        "The Las Vegas Aces celebrate winning back-to-back WNBA championships after closing out the New York Liberty in dramatic fashion in Game 4.✔️Subscribe to ESPN...",
      url: "https://www.youtube.com/watch?v=qzBDX55L6v8",
      urlToImage: "https://i.ytimg.com/vi/qzBDX55L6v8/maxresdefault.jpg",
      publishedAt: "2023-10-19T02:24:15Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Des Moines Register",
      },
      author: "Des Moines Register",
      title:
        "Iowa Congressmember gets death threats after voting against Jim Jordan - Des Moines Register",
      description: null,
      url: "https://www.desmoinesregister.com/story/news/politics/2023/10/18/iowa-mariannette-miller-meeks-no-longer-supporting-jim-jordan-for-house-speaker/71228842007/",
      urlToImage:
        "https://i.guim.co.uk/img/media/980edf9a7897400678ffa50abe7b6f82dddee58c/0_98_4337_2604/master/4337.jpg?width=620&dpr=2&s=none",
      publishedAt: "2023-10-19T02:03:45Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "GSMArena.com",
      },
      author: "Vlad",
      title:
        "Google Chrome is getting five big address bar updates - GSMArena.com news - GSMArena.com",
      description:
        "These are all meant to make your browsing experience better. The most used web browser on Earth is getting some important updates for its address bar....",
      url: "https://www.gsmarena.com/google_chrome_is_getting_five_big_address_bar_updates-news-60282.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/23/10/google-chrome-address-bar-new-features/-952x498w6/gsmarena_000.jpg",
      publishedAt: "2023-10-19T01:51:01Z",
      content:
        "The most used web browser on Earth is getting some important updates for its address bar. Today Google has announced five of them, and they are all meant to make your use of the address bar more effi… [+1388 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Michelle Nichols",
      title: "US vetoes UN Security Council action on Israel, Gaza - Reuters",
      description:
        'The United States vetoed a United Nations Security Council resolution on Wednesday that would have called for humanitarian pauses <a href="/world/biden-heads-middle-east-inflamed-by-gaza-hospital-blast-2023-10-18/">in the conflict between Israel and Palestini…',
      url: "https://www.reuters.com/world/us-vetoes-un-security-council-action-israel-gaza-2023-10-18/",
      urlToImage:
        "https://www.reuters.com/resizer/LTCCRllVBal9_49uaeW96P4jDoE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/33C7PY7WCVLJHJRLIXLYDI2NHE.jpg",
      publishedAt: "2023-10-19T01:22:00Z",
      content:
        "UNITED NATIONS, Oct 18 (Reuters) - The United States vetoed a United Nations Security Council resolution on Wednesday that would have called for humanitarian pauses in the conflict between Israel and… [+4581 chars]",
    },
    {
      source: {
        id: null,
        name: "KGW.com",
      },
      author: "Pat Dooris",
      title:
        "How the FBI's Oregon office handles threats arising from the Israel-Hamas war - KGW.com",
      description:
        "Before heading the FBI in Oregon, Special Agent in Charge Kieran Ramsey directed a federal hostage recovery task force in Washington, D.C.",
      url: "https://www.kgw.com/article/news/local/the-story/fbi-oregon-threats-hostage-recovery-israel-hamas-palestine/283-f82b4c32-dd46-4dc7-aa9f-c0cd564562d3",
      urlToImage:
        "https://media.kgw.com/assets/KGW/images/e4c8b5d8-9eee-45e7-99b9-eabe4a7ba7e6/e4c8b5d8-9eee-45e7-99b9-eabe4a7ba7e6_1140x641.jpg",
      publishedAt: "2023-10-19T00:59:00Z",
      content:
        "PORTLAND, Ore. As war rages between Israel and Hamas in the Middle East, it's stirring up vitriol the world over. As a result, both the Jewish and Muslim communities in Oregon are more vulnerable and… [+6731 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Samia Nakhoul, Matt Spetalnick, Alexander Cornwell",
      title: "Israel's endgame? No sign of post-war plan for Gaza - Reuters",
      description:
        "Israel is vowing to wipe out Hamas in a relentless onslaught on the Gaza Strip but has no obvious endgame in sight, with no clear plan for how to govern the ravaged Palestinian enclave even if it triumphs on the battlefield.",
      url: "https://www.reuters.com/world/middle-east/israels-endgame-no-sign-post-war-plan-gaza-2023-10-18/",
      urlToImage:
        "https://www.reuters.com/resizer/bBSFhL8Pmbq-R9CyEYfMXhGq9YA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/527O7ECX3VISTEMZPDORIS6CNU.jpg",
      publishedAt: "2023-10-19T00:32:00Z",
      content:
        "DUBAI/WASHINGTON, Oct 18 (Reuters) - Israel is vowing to wipe out Hamas in a relentless onslaught on the Gaza Strip but has no obvious endgame in sight, with no clear plan for how to govern the ravag… [+8104 chars]",
    },
    {
      source: {
        id: null,
        name: "ScienceAlert",
      },
      author: "Universe Today",
      title:
        "NASA Shares Out-of-This-World View of The 'Ring of Fire' Eclipse - ScienceAlert",
      description:
        "Eclipse-gazers across the United States got a chance last weekend to watch as the Moon aligned with the Sun to create an annular eclipse.",
      url: "https://www.sciencealert.com/nasa-shares-out-of-this-world-view-of-the-ring-of-fire-eclipse",
      urlToImage:
        "https://www.sciencealert.com/images/2023/10/NASA-DSCOVR-ring-of-fire-eclipse-copy.jpg",
      publishedAt: "2023-10-19T00:23:21Z",
      content:
        "Eclipse-gazers across the United States got a chance last weekend to watch as the Moon aligned with the Sun to create an annular eclipse.\r\nThey watched from the ground for a short experience of not-q… [+2569 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Lisa Richwine, Dawn Chmielewski",
      title:
        "Netflix raises prices and adds subscribers, despite strikes - Reuters",
      description:
        'Netflix <a href="https://www.reuters.com/markets/companies/NFLX.O" target="_blank">(NFLX.O)</a> increased subscription prices for some streaming plans in the United States, Britain and France on Wednesday as it shattered expectations for new customers, sendin…',
      url: "https://www.reuters.com/technology/netflix-raises-prices-it-adds-9-million-subscribers-2023-10-18/",
      urlToImage:
        "https://www.reuters.com/resizer/JVYj4uHKjV9I_pxLQFMHAfz_VMM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2YGFNHTZONO37JVGKR4TBF62ZU.jpg",
      publishedAt: "2023-10-18T23:19:00Z",
      content:
        "LOS ANGELES, Oct 18 (Reuters) - Netflix (NFLX.O) increased subscription prices for some streaming plans in the United States, Britain and France on Wednesday as it shattered expectations for new cust… [+3916 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Zoe Wells",
      title:
        "Orionids meteor shower 2023: How to see peak 'shooting stars' - USA TODAY",
      description:
        "The 2023 Orionids meteor shower is expected to peak this weekend. Here's how to watch the show.",
      url: "https://www.usatoday.com/story/news/nation/2023/10/18/orionids-meteor-shower-2023/71210933007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/10/18/USAT/71225765007-1235675268.jpg?crop=6239,3510,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
      publishedAt: "2023-10-18T23:17:18Z",
      content:
        "The Orionids meteor shower will peak this weekend, providing people on Earth an annual chance to see what astronomers consider one of the most spectacular events of the year.\r\nEvery year, the Orionid… [+2318 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "Astros vs. Rangers: TV channel, watch ALCS online, live stream, prediction, Game 3 pick, odds, time, pitchers - CBS Sports",
      description: "The ALCS shifts to Globe Life Field for Game 3",
      url: "https://www.cbssports.com/mlb/news/astros-vs-rangers-tv-channel-watch-alcs-online-live-stream-prediction-game-3-pick-odds-time-pitchers/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/10/17/1afd83f1-5488-40b4-8cc6-a49ccab3637f/thumbnail/1200x675/f38903702902fefb03dee5becc83902d/scherzer-getty.png",
      publishedAt: "2023-10-18T23:16:00Z",
      content:
        "The American League Championship Series continues Wednesday night at Globe Life Field. The Texas Rangers defeated the in-state rival Houston Astros in Games 1 and 2 at Minute Maid Park, so they hold … [+1777 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author:
        "Heard Editors, George Stahl, David Marino-Nachison, WSJ Staff, Gina Heeb, Hannah Miao, Sabela Ojea, Peter Loftus, Tom Fairless, Jack Pitcher, Alexander Osipovich, Eliot Brown, Costas Paris, Joe Wallace, Anna Wilde Mathews",
      title:
        "Netflix Stock Jumps After Quarterly Results, Price Hikes Impress Investors - The Wall Street Journal",
      description:
        "Netflix shares rose in off-hours trading after the company said it's planning price increases",
      url: "https://www.wsj.com/livecoverage/stock-market-today-dow-jones-10-18-2023",
      urlToImage: "https://images.wsj.net/im-785590/social",
      publishedAt: "2023-10-18T22:53:00Z",
      content:
        "Long-term bond yields hit a fresh 16-year high, weighing on stocks already pressured by the conflict in Gaza and corporate earnings results. Read today's full markets roundup here.\r\nThe benchmark 10-… [+1882 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Zack Sharf",
      title:
        "Martin Scorsese Recalls Paramount Backing Out of ‘Flower Moon’ After Script Change, Says DiCaprio’s Improv Caused Some Eye Rolls: ‘You Don’t Need That Dialogue’ - Variety",
      description:
        'Martin Scorsese remembers Paramount executives telling him they would not back "Flower Moon" after the script was overhauled.',
      url: "https://variety.com/2023/film/news/martin-scorsese-paramount-rejecting-flower-moon-dicaprio-improv-1235760642/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2023/10/GettyImages-1739889640.jpg?w=1000&h=563&crop=1",
      publishedAt: "2023-10-18T22:53:00Z",
      content:
        "In a new interview with the Wall Street Journal, Martin Scorsese recalled Paramount Pictures execs telling him point blank they would not be backing the overhauled script for “Killers of the Flower M… [+3082 chars]",
    },
    {
      source: {
        id: "axios",
        name: "Axios",
      },
      author: "Axios",
      title: "Inside Biden's talks with Netanyahu, Israel's war team - Axios",
      description: null,
      url: "https://www.axios.com/2023/10/18/israel-hamas-2023-netanyahu-biden-news",
      urlToImage:
        "https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg?resize=2048,1536",
      publishedAt: "2023-10-18T22:36:43Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "KABC-TV",
      },
      author: null,
      title:
        "PCH Malibu California crash: 22-year-old arrested after 4 Pepperdine University students killed in multicar collision - KABC-TV",
      description:
        "The driver, who was identified as 22-year-old Fraser Bohm, was arrested for vehicular manslaughter with gross negligence.",
      url: "https://abc7.com/pch-crash-malibu-california-pacific-coast-highway/13934049/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/13933891_101823-kabc-4am-malibu-pch-fatals-vid.jpg?w=1600",
      publishedAt: "2023-10-18T21:45:00Z",
      content:
        "MALIBU, Calif. (KABC) -- A 22-year-old man has been arrested in a multicar crash on Pacific Coast Highway in Malibu that killed four Pepperdine University students, authorities said.\r\nDuring an after… [+3139 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Breck Dumas",
      title:
        "Top law firm rescinds job offers to Harvard, Columbia students linked to anti-Israel letters - Fox Business",
      description:
        "Prestigious law firm Davis Polk has rescinded job offers to three Ivy League students who are members of groups that signed letters blaming Israel after terror attacks on the country.",
      url: "https://www.foxbusiness.com/politics/top-law-firm-rescinds-job-offers-harvard-columbia-students-linked-anti-israel-letters",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/10/0/0/HARVARD-PALESTINE-PROTEST-GETTY.jpg?ve=1&tl=1",
      publishedAt: "2023-10-18T21:26:54Z",
      content:
        "Prestigious law firm Davis Polk rescinded job offers to three students who led organizations at their respective universities, Harvard and Columbia, that signed on to open letters criticizing Israel … [+3390 chars]",
    },
    {
      source: {
        id: null,
        name: "Sports Illustrated",
      },
      author: "Patrick Andres",
      title:
        "Travis Kelce Jokes About Nerve-Racking Conversation Between Taylor Swift and His Dad - Sports Illustrated",
      description:
        "The Chiefs tight end had some fun with his blue-collar father.",
      url: "https://www.si.com/nfl/2023/10/18/travis-kelce-chiefs-jokes-conversation-taylor-swift-ed-kelce",
      urlToImage:
        "https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAxNTg5MTI2OTc2MjUxMjY1/usatsi_21634933.jpg",
      publishedAt: "2023-10-18T21:17:06Z",
      content:
        "By all accounts, Ed Kelce is not a man with whom one should trifle.\r\nThe father of Chiefs tight end Travis Kelce and Eagles center Jason Kelce comes from a long line of military personnel, as he has … [+1220 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    //runs after render....
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=7aa0e9c80b39440ab49be33b7698c4db";
    let data = await fetch(url);
    let parsedData = await data.json();
    // parsedData = this.articles;
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container">
        <div
          style={{
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            height: "10vh",
          }}
        >
          <h2>
            <u>Nick's News - Top Headlines</u>
          </h2>
        </div>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col -md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
