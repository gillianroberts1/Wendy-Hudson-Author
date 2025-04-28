import FourSteps from "../assets/books/FourSteps.jpg";
import GermanFourSteps from "../assets/books/GermanFourSteps.jpg";
import MeantToBeMe from "../assets/books/MeantToBeMe.jpg";
import island from "../assets/books/island.jpg";
import GermanIsland from "../assets/books/GermanIsland.jpg";
import mineToKeep from "../assets/books/mineToKeep.jpg";

const booksData = [
  {
    id: 1,
    title: "Four Steps",
    subtitle:
      "Two women. One haunting past. A bond forged in the unforgiving Highlands.",
    description:
      "Alex Ryan lives a simple life. She has her farm in the Scottish countryside, and the self-imposed seclusion suits her until a crime that has haunted her for years tears through the calm and shatters the fragile peace she’d finally managed to find. Lori Hunter’s greatest love is the mountains. They’re her escape from the constant hustle and bustle of everyday life. Growing up was neither traditional nor easy for Lori, but now she’s beginning to realise she’s settled for both. A dead-end relationship and little to look forward to. Her solution when the suffocation sets in? Run for the hills. A chance encounter in the mountains of the Scottish Highlands leads Alex and Lori into a whirlwind of heartache and a fight for survival as they build a formidable bond that will be tested to its ultimate limits.",
    publishedDate: "2016-08-31",
    printLength: 366,
    rating: 4.5,
    coverImage: FourSteps,
    amazonLink:
      "https://www.amazon.co.uk/Four-Steps-Wendy-Hudson-ebook/dp/B01KIDGB7Y?ref_=ast_author_dp#detailBullets_feature_div",
    goodreadsLink: "https://www.goodreads.com/book/show/31749634-four-steps",
    reviewSnippet:
      "Contrasting elements of romance and suspense brought together with great skill – 5 Stars. - Amazon reader",
  },
  {
    id: 2,
    title: "Mine To Keep",
    subtitle: "Love and danger collide in a thrilling Scottish romance.",
    description:
      "After losing her mother, Erin Carter has been haunted by childhood nightmares. Alone and seeking answers, she sets out to find her estranged father, hoping to uncover a sense of family and peace. Her search leads her to Hopetoun, a quiet village in rural Scotland, and the mysterious Cornfield Castle. At the castle, Erin meets Abigail Miller, the castle’s chef, who becomes both her guide and ally in the search for the truth. Along with Abigail’s brother, George, they sift through local gossip, discerning fact from fiction, and offer Erin a safe haven within the castle walls. But as Erin’s nightmares intensify, she faces the ultimate challenge: can she overcome the darkness of her past and begin anew?",
    publishedDate: "2018-11-29",
    printLength: 306,
    rating: 5,
    coverImage: mineToKeep,
    amazonLink:
      "https://www.amazon.co.uk/Mine-Keep-Wendy-Hudson-ebook/dp/B076HRFJN7?ref_=ast_author_dp",
    goodreadsLink: "https://www.goodreads.com/book/show/36145876-mine-to-keep",
    reviewSnippet:
      "A beautifully written story of romance and suspense, with strong characters and an atmospheric Scottish setting. Erin and Abby's slow-burn romance kept me hooked, and the tension from the darker elements made it even more thrilling. A must-read for fans of both love and mystery! - Amazon reader",
  },
  {
    id: 3,
    title: "Meant to Be Me",
    subtitle:
      "A gripping, slow-building romantic suspense that will keep you on the edge of your seat until the very last moment.",
    description:
      "Finding 'The One' is never straightforward, and for engineer Darcy Harris, it’s even more complicated. To make matters worse, a mysterious stalker seems determined to disrupt her life, but Darcy refuses to let anyone take control. Her steadfast best friend and boss, Anja Olsen, is caught in an internal struggle, questioning the life she's built and the person she wants to become. At the same time, Eilidh Grey, a woman with an instinct to charge headfirst into chaos and passion, is about to face a destiny that’s far from what she expected. A fateful encounter on a snow-covered bridge in Inverness, Scotland, ties these three women together in an unpredictable love triangle. What will happen when everything begins to unravel?",
    publishedDate: "2022-09-15",
    printLength: 335,
    rating: 4.6,
    coverImage: MeantToBeMe,
    amazonLink:
      "https://www.amazon.co.uk/Meant-Be-Me-Wendy-Hudson-ebook/dp/B07QNRN8JJ?ref_=ast_author_dp",
    goodreadsLink:
      "https://www.goodreads.com/book/show/44415969-meant-to-be-me",
    reviewSnippet:
      "What a ride! A gripping lesbian psychological thriller that kept me guessing. The stalker's perspective added a chilling layer, and the tension built brilliantly. The action-packed climax was just as satisfying as the psychological twists. The complex relationships kept things interesting too. A fantastic read from start to finish! Now I’m off to find more of Wendy Hudson’s work! - Goodreads reader",
  },
  {
    id: 4,
    title: "Island Between Us",
    subtitle: "A journey of survival and rekindled love on a remote island.",
    description:
      "Georgia Hamilton, an experienced adventurer, has spent her life exploring the world's most remote corners. Now back in Scotland, she teaches her expert survival skills. Kelsey Campbell, a woman tired of living a life defined by others' expectations, signs up for a two-week survival course to escape the constant scrutiny. What draws her to the course isn't just the location, but also the chance to reconnect with Georgia, whom she met years ago and never fully got over. But when a storm forces them to survive together on a remote island, their struggle for safety quickly becomes more than a fight for survival. As the harsh elements threaten, their old bond is reignited, but they soon realize their battle is about much more than just the storm. It’s a chance for second chances and love that was never fully realized.",
    publishedDate: "2021-08-16",
    printLength: 320,
    rating: 4.7,
    coverImage: island,
    amazonLink:
      "https://www.amazon.co.uk/Island-Between-Us-Wendy-Hudson-ebook/dp/B09CV5XP7X?ref_=ast_author_dp",
    goodreadsLink:
      "https://www.goodreads.com/book/show/58460478-the-island-between-us",
    reviewSnippet:
      "A solid outdoor adventure with a touch of romance. The chemistry between Georgia and Kelsey was organic, and the island setting added depth. While the romance wasn’t the main plot, it worked well with the survival storyline. A great read for fans of survival and light romance. - Goodreads reader",
  },

  {
    id: 5,
    title: "Genau Vier Schritte",
    subtitle:
      "Zwei Frauen. Eine erschütternde Vergangenheit. Ein Band, das in den unbarmherzigen Highlands geschmiedet wurde.",
    description:
      "Alex Ryan lebt ein einfaches Leben. Sie hat ihren Bauernhof in der schottischen Landschaft, und die selbst auferlegte Abgeschiedenheit passt zu ihr, bis ein Verbrechen, das sie jahrelang verfolgt hat, die Ruhe zerreißt und den zerbrechlichen Frieden zerstört, den sie endlich gefunden hatte. Lori Hunter liebt die Berge. Sie sind ihre Flucht vor dem ständigen Trubel des Alltags. Lori hatte eine unkonventionelle und nicht einfache Kindheit, aber jetzt beginnt sie zu merken, dass sie sich mit beiden abgefunden hat. Eine festgefahrene Beziehung und wenig, worauf sie sich freuen kann. Ihre Lösung, wenn die Beklemmung überhandnimmt? Ab in die Berge. Ein zufälliges Zusammentreffen in den schottischen Highlands führt Alex und Lori in einen Strudel aus Kummer und einen Überlebenskampf, während sie eine außergewöhnliche Bindung aufbauen, die bis an ihre äußersten Grenzen geprüft wird.",
    publishedDate: "2016-08-31",
    printLength: 366,
    rating: 4.5,
    coverImage: GermanFourSteps,
    amazonLink:
      "https://www.amazon.co.uk/Genau-Schritte-German-Wendy-Hudson-ebook/dp/B0CSYQK4L3?ref_=ast_author_dp",
    goodreadsLink:
      "https://www.amazon.co.uk/Genau-Schritte-German-Wendy-Hudson-ebook/dp/B0CSYQK4L3?ref_=ast_author_dp",
    reviewSnippet:
      "Kontrastreiche Elemente von Romantik und Spannung meisterhaft zusammengebracht – 5 Sterne.",
  },
  {
    id: 6,
    title: "Um uns nichts als das Meer",
    subtitle:
      "Wenn auf einer einsamen schottischen Insel Abenteuer und Romantik aufeinandertreffen, wird es spannend.",
    description:
      "Georgia Hamilton ist eine Abenteurerin, die ihr Leben in abgelegenen Gegenden der Welt verbracht hat. Nun ist sie nach Schottland zurückgekehrt, um ihre Survival-Training-Kurse anzubieten, bei denen sie ihr Wissen über das Überleben in der Wildnis vermittelt.\n\nKelsey Campbell, eine Schauspielerin, hat genug vom Druck ihres Berufs. Sie sehnt sich nach einer Auszeit und einem Ort fernab des Rampenlichts. Der zweiwöchige Survival-Kurs auf einer abgelegenen schottischen Insel scheint genau das zu sein, was sie braucht.\n\nEs ist jedoch nicht nur der abgelegene Ort, der Kelsey anzieht. Sie und Georgia hatten sich vor Jahren an Silvester getroffen, verloren jedoch den Kontakt, was Kelsey nie wirklich überwindet.\n\nGerade als sich die beiden wieder näherkommen, verwandelt sich das Survival-Training in einen echten Kampf ums Überleben, und die Zeit wird zu ihrem größten Feind.",
    publishedDate: "2022-07-21",
    printLength: 420,
    rating: 4.8,
    coverImage: GermanIsland,
    amazonLink: "https://www.amazon.de/Um-uns-nichts-Meer/dp/xxxx",
    goodreadsLink:
      "https://www.goodreads.com/book/show/75697340-um-uns-nichts-als-das-meer",
    reviewSnippet:
      "Die Geschichte um Georgia und Kelsey hat mich so mitfiebern lassen, dass ich das 'wahre' Leben kurzzeitig ausgeblendet habe. Wendy Hudson hat die Charaktere liebevoll herausgearbeitet und die Szenen bildlich beschrieben, sodass es mir leicht fiel, mich in die Situationen hineinzuversetzen.",
  },
];
