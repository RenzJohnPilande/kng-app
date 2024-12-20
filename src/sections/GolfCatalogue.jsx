import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const GolfCatalouge = () => {
  const contentList = [
    {
      value: "tab1",
      title: "1",
      content: (
        <div className="">
          Golf is a sport where players use clubs to hit a ball into a series of holes on a course
          in as few strokes as possible. The game is played on a course with 18 holes, each with a
          unique layout and challenges.
        </div>
      ),
    },
    {
      value: "tab2",
      title: "2",
      content: (
        <div className="">
          Selecting the right golf club is essential for any golfer. Clubs are categorized into
          woods, irons, wedges, and putters, each designed for different types of shots. Beginners
          often start with a 7-iron or a putter to master basic techniques.
        </div>
      ),
    },
    {
      value: "tab3",
      title: "3",
      content: (
        <div className="">
          In golf, 'par' refers to the number of strokes a skilled golfer is expected to take to
          complete a hole. Par values vary for each hole, typically ranging from 3 to 5 strokes. A
          score of 1 below par is called a birdie.
        </div>
      ),
    },
    // {
    //   value: "tab4",
    //   title: "The Golf Swing",
    //   content: (
    //     <div className="">
    //       The golf swing is one of the most fundamental skills in the game. A proper swing involves
    //       timing, balance, and coordination, and can be broken down into the backswing, downswing,
    //       and follow-through.
    //     </div>
    //   ),
    // },
    // {
    //   value: "tab5",
    //   title: "Putting Techniques",
    //   content: (
    //     <div className="">
    //       Putting is crucial for success in golf. It involves making short strokes to roll the ball
    //       into the hole. Key techniques include maintaining a steady hand, aligning your putter
    //       correctly, and reading the greens to gauge the ball's path.
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="flex flex-wrap justify-center content-center px-6 py-20 bg-zinc-100 w-full">
      <div className="flex justify-center items-center text-center flex-col flex-wrap w-full p-2">
        <h1 className="text-3xl font-bold capitalize my-1">Golf Tips to Improve Your Game</h1>
        <p className="max-w-[600px] my-1">
          Get quick and effective tips to enhance your skills, whether you're just starting or
          looking to refine your game.
        </p>
      </div>
      <Tabs defaultValue={contentList[0].value} className="flex flex-wrap w-full max-w-[1200px]">
        <TabsList className="flex gap-2 p-0 h-max overflow-x-auto">
          {contentList.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className="border border-zinc-400 capitalize bg-white px-4 py-2 w-[50px] rounded"
            >
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {contentList.map((item) => (
          <TabsContent
            key={item.value}
            value={item.value}
            className="w-full border border-zinc-400 text-lg text-gray-800 bg-white p-4 rounded shadow-md"
          >
            {item.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
