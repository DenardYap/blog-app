const redis = require("redis");
const { promisify } = require("util");
const { read_, insert_, delete_ } = require("../db/query");

let a = async () => {
  const client = redis.createClient({
    url: "redis://:pa97422c1d7c91a3118d9a6b4252d13146e9e4c1525516f312a9c05181cf67552@ec2-34-195-55-195.compute-1.amazonaws.com:14589",
  });
  client.on("connect", () => {
    console.log("Connected to Redis server");
  });

  posts = await read_("posts");
  //   console.log(posts);
  const GET_ASYNC = promisify(client.get).bind(client);
  const SET_ASYNC = promisify(client.set).bind(client);
  await SET_ASYNC(
    "posts",
    JSON.stringify(posts) //living forever
  );

  const x = {
    id: 9999,
    title: "asdasdasd",
    author: "bernard",
    date_created: "2022-01-25T05:00:00:000Z",
  };
  await SET_ASYNC(
    "posts",
    JSON.stringify(x) //living forever
  );
  console.log(await GET_ASYNC("posts"));
};

a();
