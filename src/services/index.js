import axios from 'axios';
const baseURL = "https://stories.narraflix.com/api/"
const Version = "v1/"
const API = axios.create({
  baseURL: `${baseURL}${Version}`,
  headers: {
    "Content-Type": "application/json"
  }
});

API.interceptors.request.use(function (config) {
  const token = 'Token d385962ed0c8d6d06681b2dc196ece01e23d07f1'
  config.headers.Authorization = token ? token : '';
  return config;
});
//For integrating Triggers.

const storyLines = '/storyline';


// Story Line Item 
const storyLineItems = '/storylineitem/';


// Hot Spot
const hotspot = '/hotspot/';

const fetchStoryLines = () => API.get(storyLines);
const fetchStoryItems = () => API.get(storyLineItems);
const fetchHotSpots = () => API.get(hotspot);


// const URI = ''  //Url for api hit
//data is a placeholder aka dummy data for actual api data replace this with api resp
const data = [
  {
    id: 3,
    uuid: "c0c0272f-0b75-4596-9562-2494a9607058",
    create_datetime: "2021-01-14T11:32:28.177806+01:00",
    modified_datetime: "2021-01-14T11:32:28.177826+01:00",
    markasdelete: false,
    story: 3,
    storylineitem_set: [
      {
        id: 4,
        uuid: "bd4325cf-5ba6-49df-ba54-587fa7c5686f",
        create_datetime: "2021-01-14T11:33:08.660406+01:00",
        modified_datetime: "2021-01-14T11:33:08.660426+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/3e905c419c5c54b477d42837b1a7e70ca4576a3c5b09d78236c0d91950c61d1c.jpg",
        is_video: false,
        video: null,
        order: 1,
        storyline: {
          id: 3,
          uuid: "c0c0272f-0b75-4596-9562-2494a9607058",
          create_datetime: "2021-01-14T11:32:28.177806+01:00",
          modified_datetime: "2021-01-14T11:32:28.177826+01:00",
          markasdelete: false,
          story: {
            id: 3,
            uuid: "ed930b82-70dc-496c-bd63-81b782505573",
            create_datetime: "2021-01-14T11:24:48.193723+01:00",
            modified_datetime: "2021-01-14T11:24:48.193743+01:00",
            markasdelete: false,
            is_published: false,
            name: "Demo of stories structure",
            user: 3,
          },
        },
      },
      {
        id: 5,
        uuid: "fe7d6d01-46ac-4a13-8a9f-205e418ef236",
        create_datetime: "2021-01-14T11:33:17.900623+01:00",
        modified_datetime: "2021-01-14T11:33:17.900642+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/f9bca9783c1ecd280db44ac79692d806a6915d9502cfb7c9b13bce1febe13989.jpg",
        is_video: false,
        video: null,
        order: 2,
        storyline: {
          id: 3,
          uuid: "c0c0272f-0b75-4596-9562-2494a9607058",
          create_datetime: "2021-01-14T11:32:28.177806+01:00",
          modified_datetime: "2021-01-14T11:32:28.177826+01:00",
          markasdelete: false,
          story: {
            id: 3,
            uuid: "ed930b82-70dc-496c-bd63-81b782505573",
            create_datetime: "2021-01-14T11:24:48.193723+01:00",
            modified_datetime: "2021-01-14T11:24:48.193743+01:00",
            markasdelete: false,
            is_published: false,
            name: "Demo of stories structure",
            user: 3,
          },
        },
      },
    ],
  },
  {
    id: 4,
    uuid: "55203894-c6ed-441a-bcc8-9aa1ab689881",
    create_datetime: "2021-01-14T11:32:38.482258+01:00",
    modified_datetime: "2021-01-14T11:32:38.482278+01:00",
    markasdelete: false,
    story: 3,
    storylineitem_set: [
      {
        id: 6,
        uuid: "7114dcb4-3202-45f7-a4f6-3a44bb9fd76a",
        create_datetime: "2021-01-14T11:33:26.061249+01:00",
        modified_datetime: "2021-01-14T11:33:26.061277+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/f861bcbfa22ee87f5521f28ac8965f9eac4841df3e76966c89c275df44facce1.jpg",
        is_video: false,
        video: null,
        order: 1,
        storyline: {
          id: 4,
          uuid: "55203894-c6ed-441a-bcc8-9aa1ab689881",
          create_datetime: "2021-01-14T11:32:38.482258+01:00",
          modified_datetime: "2021-01-14T11:32:38.482278+01:00",
          markasdelete: false,
          story: {
            id: 3,
            uuid: "ed930b82-70dc-496c-bd63-81b782505573",
            create_datetime: "2021-01-14T11:24:48.193723+01:00",
            modified_datetime: "2021-01-14T11:24:48.193743+01:00",
            markasdelete: false,
            is_published: false,
            name: "Demo of stories structure",
            user: 3,
          },
        },
      },
      {
        id: 7,
        uuid: "9eddaa6c-64d4-4ab6-bb4c-e926744544bf",
        create_datetime: "2021-01-14T11:33:34.234682+01:00",
        modified_datetime: "2021-01-14T11:33:34.234701+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/0e9d813ca836176bfb1277d2063cf55e3f91ef3751e8f2891d62f2b09f68bb1b.jpg",
        is_video: false,
        video: null,
        order: 2,
        storyline: {
          id: 4,
          uuid: "55203894-c6ed-441a-bcc8-9aa1ab689881",
          create_datetime: "2021-01-14T11:32:38.482258+01:00",
          modified_datetime: "2021-01-14T11:32:38.482278+01:00",
          markasdelete: false,
          story: {
            id: 3,
            uuid: "ed930b82-70dc-496c-bd63-81b782505573",
            create_datetime: "2021-01-14T11:24:48.193723+01:00",
            modified_datetime: "2021-01-14T11:24:48.193743+01:00",
            markasdelete: false,
            is_published: false,
            name: "Demo of stories structure",
            user: 3,
          },
        },
      },
    ],
  },
  {
    id: 5,
    uuid: "778c0f13-ef3c-4036-93cd-4c0df830ea30",
    create_datetime: "2021-01-14T17:12:33.937483+01:00",
    modified_datetime: "2021-01-14T17:12:33.937502+01:00",
    markasdelete: false,
    story: 4,
    storylineitem_set: [
      {
        id: 8,
        uuid: "370c184d-5f9f-4c07-9445-5b0a463fb0b5",
        create_datetime: "2021-01-14T17:13:49.981165+01:00",
        modified_datetime: "2021-01-14T17:13:49.981187+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/cf9681ff963e8963a5236083b41c5288baf72dd8047e9357d5845ef085f3e4ac.jpg",
        is_video: false,
        video: null,
        order: 1,
        storyline: {
          id: 5,
          uuid: "778c0f13-ef3c-4036-93cd-4c0df830ea30",
          create_datetime: "2021-01-14T17:12:33.937483+01:00",
          modified_datetime: "2021-01-14T17:12:33.937502+01:00",
          markasdelete: false,
          story: {
            id: 4,
            uuid: "c129a878-10ba-4ece-bd11-86bdd857b7de",
            create_datetime: "2021-01-14T17:12:27.725493+01:00",
            modified_datetime: "2021-01-14T17:12:27.725513+01:00",
            markasdelete: false,
            is_published: false,
            name: "Cherry Blossom",
            user: 3,
          },
        },
      },
      {
        id: 9,
        uuid: "d7bd1e42-ecb1-4e6f-bc36-37c63dd2932b",
        create_datetime: "2021-01-14T17:13:57.669015+01:00",
        modified_datetime: "2021-01-14T17:13:57.669033+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/912ae48edcf310615b1821ec01403dec658792c456fbb4876a0dd9ea16d254d2.jpg",
        is_video: false,
        video: null,
        order: 2,
        storyline: {
          id: 5,
          uuid: "778c0f13-ef3c-4036-93cd-4c0df830ea30",
          create_datetime: "2021-01-14T17:12:33.937483+01:00",
          modified_datetime: "2021-01-14T17:12:33.937502+01:00",
          markasdelete: false,
          story: {
            id: 4,
            uuid: "c129a878-10ba-4ece-bd11-86bdd857b7de",
            create_datetime: "2021-01-14T17:12:27.725493+01:00",
            modified_datetime: "2021-01-14T17:12:27.725513+01:00",
            markasdelete: false,
            is_published: false,
            name: "Cherry Blossom",
            user: 3,
          },
        },
      },
    ],
  },
  {
    id: 6,
    uuid: "88d1e209-e532-427a-9090-62f3bbf99f44",
    create_datetime: "2021-01-14T17:12:36.180297+01:00",
    modified_datetime: "2021-01-14T17:12:36.180318+01:00",
    markasdelete: false,
    story: 4,
    storylineitem_set: [
      {
        id: 10,
        uuid: "db4c2804-df30-4921-89ac-cf68e0d49b87",
        create_datetime: "2021-01-14T17:14:16.557206+01:00",
        modified_datetime: "2021-01-14T17:14:16.557226+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/5753a7dc609e48bf0e8cfa05bb0685b7de54d1ae8004e781f1e82581979995de.jpg",
        is_video: false,
        video: null,
        order: 1,
        storyline: {
          id: 6,
          uuid: "88d1e209-e532-427a-9090-62f3bbf99f44",
          create_datetime: "2021-01-14T17:12:36.180297+01:00",
          modified_datetime: "2021-01-14T17:12:36.180318+01:00",
          markasdelete: false,
          story: {
            id: 4,
            uuid: "c129a878-10ba-4ece-bd11-86bdd857b7de",
            create_datetime: "2021-01-14T17:12:27.725493+01:00",
            modified_datetime: "2021-01-14T17:12:27.725513+01:00",
            markasdelete: false,
            is_published: false,
            name: "Cherry Blossom",
            user: 3,
          },
        },
      },
      {
        id: 11,
        uuid: "c2fd229c-bc69-4cf5-8404-8e53a7dda786",
        create_datetime: "2021-01-14T17:14:26.506517+01:00",
        modified_datetime: "2021-01-14T17:14:26.506534+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/e57e08eadc2a21fbbe607337fa5ae40a1f58580f4c8ae9ccefd04cce7721bd47.jpg",
        is_video: false,
        video: null,
        order: 2,
        storyline: {
          id: 6,
          uuid: "88d1e209-e532-427a-9090-62f3bbf99f44",
          create_datetime: "2021-01-14T17:12:36.180297+01:00",
          modified_datetime: "2021-01-14T17:12:36.180318+01:00",
          markasdelete: false,
          story: {
            id: 4,
            uuid: "c129a878-10ba-4ece-bd11-86bdd857b7de",
            create_datetime: "2021-01-14T17:12:27.725493+01:00",
            modified_datetime: "2021-01-14T17:12:27.725513+01:00",
            markasdelete: false,
            is_published: false,
            name: "Cherry Blossom",
            user: 3,
          },
        },
      },
      {
        id: 12,
        uuid: "d1a76557-c0ff-48f8-bdf3-6ae3330f834a",
        create_datetime: "2021-01-14T17:14:34.527625+01:00",
        modified_datetime: "2021-01-14T17:14:34.527644+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/f8bd5e9b77a32be6486a2b6a76a79030afff78f56da54894ec69f608a9098c85.jpg",
        is_video: false,
        video: null,
        order: 3,
        storyline: {
          id: 6,
          uuid: "88d1e209-e532-427a-9090-62f3bbf99f44",
          create_datetime: "2021-01-14T17:12:36.180297+01:00",
          modified_datetime: "2021-01-14T17:12:36.180318+01:00",
          markasdelete: false,
          story: {
            id: 4,
            uuid: "c129a878-10ba-4ece-bd11-86bdd857b7de",
            create_datetime: "2021-01-14T17:12:27.725493+01:00",
            modified_datetime: "2021-01-14T17:12:27.725513+01:00",
            markasdelete: false,
            is_published: false,
            name: "Cherry Blossom",
            user: 3,
          },
        },
      },
    ],
  },
  {
    id: 7,
    uuid: "b6433fe0-39ee-47e2-8c65-1b11308c2559",
    create_datetime: "2021-01-14T17:12:37.972581+01:00",
    modified_datetime: "2021-01-14T17:12:37.972602+01:00",
    markasdelete: false,
    story: 4,
    storylineitem_set: [
      {
        id: 13,
        uuid: "5dbcc39c-893e-4c04-a9de-b25b63e7b0f4",
        create_datetime: "2021-01-14T17:14:44.888121+01:00",
        modified_datetime: "2021-01-14T17:14:44.888142+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/221a9c73da450c281522121a17444da855167e8e710d997663057fecacb7cab8.jpg",
        is_video: false,
        video: null,
        order: 1,
        storyline: {
          id: 7,
          uuid: "b6433fe0-39ee-47e2-8c65-1b11308c2559",
          create_datetime: "2021-01-14T17:12:37.972581+01:00",
          modified_datetime: "2021-01-14T17:12:37.972602+01:00",
          markasdelete: false,
          story: {
            id: 4,
            uuid: "c129a878-10ba-4ece-bd11-86bdd857b7de",
            create_datetime: "2021-01-14T17:12:27.725493+01:00",
            modified_datetime: "2021-01-14T17:12:27.725513+01:00",
            markasdelete: false,
            is_published: false,
            name: "Cherry Blossom",
            user: 3,
          },
        },
      },
      {
        id: 14,
        uuid: "1923ab0c-5f03-4226-a612-5d12461f5cfd",
        create_datetime: "2021-01-14T17:15:43.497959+01:00",
        modified_datetime: "2021-01-14T17:15:43.497978+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/3a047822fee03857231df9a4abbf085d66f517c11a5f87cd803de81be6f83397.jpg",
        is_video: false,
        video: null,
        order: 3,
        storyline: {
          id: 7,
          uuid: "b6433fe0-39ee-47e2-8c65-1b11308c2559",
          create_datetime: "2021-01-14T17:12:37.972581+01:00",
          modified_datetime: "2021-01-14T17:12:37.972602+01:00",
          markasdelete: false,
          story: {
            id: 4,
            uuid: "c129a878-10ba-4ece-bd11-86bdd857b7de",
            create_datetime: "2021-01-14T17:12:27.725493+01:00",
            modified_datetime: "2021-01-14T17:12:27.725513+01:00",
            markasdelete: false,
            is_published: false,
            name: "Cherry Blossom",
            user: 3,
          },
        },
      },
      {
        id: 18,
        uuid: "1985a13e-f372-46d8-8683-f0f69d3ed89b",
        create_datetime: "2021-01-14T17:35:15.968004+01:00",
        modified_datetime: "2021-01-14T17:57:17.628213+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/5494e54ad4b3adaad87cc59962108a923253129482ff8760f7de0f332f2ce30a.jpg",
        is_video: true,
        video:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/437b306fd0e086a48f98d0ac66a307cbbe20446f394cf0377e748b46ec6515be.mp4",
        order: 2,
        storyline: {
          id: 7,
          uuid: "b6433fe0-39ee-47e2-8c65-1b11308c2559",
          create_datetime: "2021-01-14T17:12:37.972581+01:00",
          modified_datetime: "2021-01-14T17:12:37.972602+01:00",
          markasdelete: false,
          story: {
            id: 4,
            uuid: "c129a878-10ba-4ece-bd11-86bdd857b7de",
            create_datetime: "2021-01-14T17:12:27.725493+01:00",
            modified_datetime: "2021-01-14T17:12:27.725513+01:00",
            markasdelete: false,
            is_published: false,
            name: "Cherry Blossom",
            user: 3,
          },
        },
      },
    ],
  },
  {
    id: 8,
    uuid: "913463bf-469c-40da-8002-93b77b6800e6",
    create_datetime: "2021-01-14T17:12:39.832032+01:00",
    modified_datetime: "2021-01-14T17:12:39.832060+01:00",
    markasdelete: false,
    story: 4,
    storylineitem_set: [
      {
        id: 15,
        uuid: "7730f58a-b834-4b01-b784-5ec04ef626bd",
        create_datetime: "2021-01-14T17:15:50.127944+01:00",
        modified_datetime: "2021-01-14T17:15:50.127963+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/3fb2f791098f826fad4bf66c43f5cae4c7409fa0d5bb18941877984c7f6e2e92.jpg",
        is_video: false,
        video: null,
        order: 1,
        storyline: {
          id: 8,
          uuid: "913463bf-469c-40da-8002-93b77b6800e6",
          create_datetime: "2021-01-14T17:12:39.832032+01:00",
          modified_datetime: "2021-01-14T17:12:39.832060+01:00",
          markasdelete: false,
          story: {
            id: 4,
            uuid: "c129a878-10ba-4ece-bd11-86bdd857b7de",
            create_datetime: "2021-01-14T17:12:27.725493+01:00",
            modified_datetime: "2021-01-14T17:12:27.725513+01:00",
            markasdelete: false,
            is_published: false,
            name: "Cherry Blossom",
            user: 3,
          },
        },
      },
      {
        id: 16,
        uuid: "a80a6e28-99f5-418c-adc3-a5225c56fb77",
        create_datetime: "2021-01-14T17:15:56.637862+01:00",
        modified_datetime: "2021-01-14T17:15:56.637881+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/3aa16ad9d4d0dfbf4a930896964a31f42530d0ea2c08c60acb81b3396471ac14.jpg",
        is_video: false,
        video: null,
        order: 2,
        storyline: {
          id: 8,
          uuid: "913463bf-469c-40da-8002-93b77b6800e6",
          create_datetime: "2021-01-14T17:12:39.832032+01:00",
          modified_datetime: "2021-01-14T17:12:39.832060+01:00",
          markasdelete: false,
          story: {
            id: 4,
            uuid: "c129a878-10ba-4ece-bd11-86bdd857b7de",
            create_datetime: "2021-01-14T17:12:27.725493+01:00",
            modified_datetime: "2021-01-14T17:12:27.725513+01:00",
            markasdelete: false,
            is_published: false,
            name: "Cherry Blossom",
            user: 3,
          },
        },
      },
      {
        id: 17,
        uuid: "ea31c1fe-20ac-47b3-bcfc-37bc12d7e74b",
        create_datetime: "2021-01-14T17:16:04.687164+01:00",
        modified_datetime: "2021-01-14T17:16:04.687183+01:00",
        markasdelete: false,
        image:
          "https://stories.narraflix.com/uploads/narraflix/2021/1/14/0fec910df4c136e8dc0824ebc6dd038667f4f483eb196d92b37f94aaed8c2ec2.jpg",
        is_video: false,
        video: null,
        order: 3,
        storyline: {
          id: 8,
          uuid: "913463bf-469c-40da-8002-93b77b6800e6",
          create_datetime: "2021-01-14T17:12:39.832032+01:00",
          modified_datetime: "2021-01-14T17:12:39.832060+01:00",
          markasdelete: false,
          story: {
            id: 4,
            uuid: "c129a878-10ba-4ece-bd11-86bdd857b7de",
            create_datetime: "2021-01-14T17:12:27.725493+01:00",
            modified_datetime: "2021-01-14T17:12:27.725513+01:00",
            markasdelete: false,
            is_published: false,
            name: "Cherry Blossom",
            user: 3,
          },
        },
      },
    ],
  },
];
//This is an api placeholder aka dummy data for fetching hotspots
const hotspots = [
  {
    uuid: "8fad6dee-537f-4a4a-809c-597d4bb0a0f5",
    id: 1,
    type: "text",
    markasdelete: false,
    content:
      "This is a textbox on the first slide of story. Tap on right edge to move to next slide.",
    box_size_width: 10,
    box_size_height: 100,
    font_size: 200,
    text_align: "center",
    external_link: null,
    link_to_story_line_item: null,
    position_top: 15,
    position_left: 0,
    text_hex_color: "#ffffff",
  },
  {
    uuid: "1576e777-f15e-4a17-a826-130b712bb437",
    id: 3,
    type: "link",
    markasdelete: false,
    content: "",
    box_size_width: 100,
    box_size_height: 100,
    font_size: 100,
    text_align: "left",
    external_link: null,
    link_to_story_line_item: 6,
    position_top: 52,
    position_left: 45,
    text_hex_color: "ffffff",
  },
  {
    uuid: "7227ddec-f084-4750-ae86-1964f8c273f3",
    id: 2,
    type: "text",
    markasdelete: false,
    content: "Here is a hotspot. It takes you to another storyline.",
    box_size_width: 100,
    box_size_height: 100,
    font_size: 100,
    text_align: "left",
    external_link: null,
    link_to_story_line_item: null,
    position_top: 50,
    position_left: 53,
    text_hex_color: "ffffff",
  },
  {
    uuid: "cc91b11e-c098-4bd6-808c-b8fcf4d49d4d",
    id: 5,
    type: "text",
    markasdelete: false,
    content:
      "The hotspot on the UN Logo is a weblink-hotspot which links to an external URL",
    box_size_width: 100,
    box_size_height: 100,
    font_size: 100,
    text_align: "justify",
    external_link: null,
    link_to_story_line_item: null,
    position_top: 2,
    position_left: 2,
    text_hex_color: "000000",
  },
  {
    uuid: "4b8e06a2-7646-4221-938d-8c1148252046",
    id: 4,
    type: "web",
    markasdelete: false,
    content: "",
    box_size_width: 100,
    box_size_height: 100,
    font_size: 100,
    text_align: "left",
    external_link: "https://narraflix.com/",
    link_to_story_line_item: null,
    position_top: 36,
    position_left: 81,
    text_hex_color: "ffffff",
  },
  {
    uuid: "f3a4cada-9c98-435f-92bb-54045e66c7f9",
    id: 6,
    type: "link",
    markasdelete: false,
    content: "",
    box_size_width: 100,
    box_size_height: 100,
    font_size: 100,
    text_align: "left",
    external_link: null,
    link_to_story_line_item: 4,
    position_top: 95,
    position_left: 90,
    text_hex_color: "ffffff",
  },
  {
    uuid: "68741ad4-55e6-4c66-b9d8-bb495ee7ad04",
    id: 10,
    type: "text",
    markasdelete: false,
    content: "Entdecke die Kirschblüte 2020 in Bonn",
    box_size_width: 100,
    box_size_height: 100,
    font_size: 300,
    text_align: "center",
    external_link: null,
    link_to_story_line_item: null,
    position_top: 15,
    position_left: 15,
    text_hex_color: "ffffff",
  },
  {
    uuid: "550cec90-c64b-41a8-9d9b-1cc1f54c2813",
    id: 8,
    type: "link",
    markasdelete: false,
    content: "",
    box_size_width: 100,
    box_size_height: 100,
    font_size: 100,
    text_align: "left",
    external_link: null,
    link_to_story_line_item: 13,
    position_top: 54.5,
    position_left: 59,
    text_hex_color: "ffffff",
  },
  {
    uuid: "7745b35d-e0fd-4f7a-9c4e-8c0d4a1389f3",
    id: 7,
    type: "link",
    markasdelete: false,
    content: "",
    box_size_width: 100,
    box_size_height: 100,
    font_size: 100,
    text_align: "left",
    external_link: null,
    link_to_story_line_item: 10,
    position_top: 39,
    position_left: 47,
    text_hex_color: "ffffff",
  },
  {
    uuid: "655663b9-fb25-49f5-bab0-040d5830c3b1",
    id: 9,
    type: "link",
    markasdelete: false,
    content: "",
    box_size_width: 100,
    box_size_height: 100,
    font_size: 100,
    text_align: "left",
    external_link: null,
    link_to_story_line_item: 15,
    position_top: 53.4,
    position_left: 37.2,
    text_hex_color: "ffffff",
  },
  {
    uuid: "b5714839-afb0-4b37-8c7d-077790de47d8",
    id: 11,
    type: "link",
    markasdelete: false,
    content: "",
    box_size_width: 100,
    box_size_height: 100,
    font_size: 100,
    text_align: "left",
    external_link: null,
    link_to_story_line_item: 8,
    position_top: 94,
    position_left: 90,
    text_hex_color: "ffffff",
  },
  {
    uuid: "a8048ec1-54d3-400b-b4f5-4f888329b54d",
    id: 12,
    type: "link",
    markasdelete: false,
    content: "",
    box_size_width: 100,
    box_size_height: 100,
    font_size: 100,
    text_align: "left",
    external_link: null,
    link_to_story_line_item: 8,
    position_top: 94,
    position_left: 90,
    text_hex_color: "ffffff",
  },
  {
    uuid: "4f1b4e89-3744-4061-9b37-3fdd16df425c",
    id: 13,
    type: "link",
    markasdelete: false,
    content: "",
    box_size_width: 100,
    box_size_height: 100,
    font_size: 100,
    text_align: "left",
    external_link: null,
    link_to_story_line_item: 8,
    position_top: 94,
    position_left: 90,
    text_hex_color: "ffffff",
  },
];
const storyItems = [
  {
    id: 4,
    uuid: "bd4325cf-5ba6-49df-ba54-587fa7c5686f",
    create_datetime: "2021-01-14T11:33:08.660406+01:00",
    modified_datetime: "2021-01-14T11:33:08.660426+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/3e905c419c5c54b477d42837b1a7e70ca4576a3c5b09d78236c0d91950c61d1c.jpg",
    is_video: false,
    video: null,
    order: 1,
    hotspot_set: [1],
    storyline: 3,
  },
  {
    id: 5,
    uuid: "fe7d6d01-46ac-4a13-8a9f-205e418ef236",
    create_datetime: "2021-01-14T11:33:17.900623+01:00",
    modified_datetime: "2021-01-14T11:33:17.900642+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/f9bca9783c1ecd280db44ac79692d806a6915d9502cfb7c9b13bce1febe13989.jpg",
    is_video: false,
    video: null,
    order: 2,
    hotspot_set: [2, 3],
    storyline: 3,
  },
  {
    id: 6,
    uuid: "7114dcb4-3202-45f7-a4f6-3a44bb9fd76a",
    create_datetime: "2021-01-14T11:33:26.061249+01:00",
    modified_datetime: "2021-01-14T11:33:26.061277+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/f861bcbfa22ee87f5521f28ac8965f9eac4841df3e76966c89c275df44facce1.jpg",
    is_video: false,
    video: null,
    order: 1,
    hotspot_set: [4, 5],
    storyline: 4,
  },
  {
    id: 7,
    uuid: "9eddaa6c-64d4-4ab6-bb4c-e926744544bf",
    create_datetime: "2021-01-14T11:33:34.234682+01:00",
    modified_datetime: "2021-01-14T11:33:34.234701+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/0e9d813ca836176bfb1277d2063cf55e3f91ef3751e8f2891d62f2b09f68bb1b.jpg",
    is_video: false,
    video: null,
    order: 2,
    hotspot_set: [6],
    storyline: 4,
  },
  {
    id: 8,
    uuid: "370c184d-5f9f-4c07-9445-5b0a463fb0b5",
    create_datetime: "2021-01-14T17:13:49.981165+01:00",
    modified_datetime: "2021-01-14T17:13:49.981187+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/cf9681ff963e8963a5236083b41c5288baf72dd8047e9357d5845ef085f3e4ac.jpg",
    is_video: false,
    video: null,
    order: 1,
    hotspot_set: [10],
    storyline: 5,
  },
  {
    id: 9,
    uuid: "d7bd1e42-ecb1-4e6f-bc36-37c63dd2932b",
    create_datetime: "2021-01-14T17:13:57.669015+01:00",
    modified_datetime: "2021-01-14T17:13:57.669033+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/912ae48edcf310615b1821ec01403dec658792c456fbb4876a0dd9ea16d254d2.jpg",
    is_video: false,
    video: null,
    order: 2,
    hotspot_set: [9, 7, 8],
    storyline: 5,
  },
  {
    id: 10,
    uuid: "db4c2804-df30-4921-89ac-cf68e0d49b87",
    create_datetime: "2021-01-14T17:14:16.557206+01:00",
    modified_datetime: "2021-01-14T17:14:16.557226+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/5753a7dc609e48bf0e8cfa05bb0685b7de54d1ae8004e781f1e82581979995de.jpg",
    is_video: false,
    video: null,
    order: 1,
    hotspot_set: [],
    storyline: 6,
  },
  {
    id: 11,
    uuid: "c2fd229c-bc69-4cf5-8404-8e53a7dda786",
    create_datetime: "2021-01-14T17:14:26.506517+01:00",
    modified_datetime: "2021-01-14T17:14:26.506534+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/e57e08eadc2a21fbbe607337fa5ae40a1f58580f4c8ae9ccefd04cce7721bd47.jpg",
    is_video: false,
    video: null,
    order: 2,
    hotspot_set: [],
    storyline: 6,
  },
  {
    id: 12,
    uuid: "d1a76557-c0ff-48f8-bdf3-6ae3330f834a",
    create_datetime: "2021-01-14T17:14:34.527625+01:00",
    modified_datetime: "2021-01-14T17:14:34.527644+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/f8bd5e9b77a32be6486a2b6a76a79030afff78f56da54894ec69f608a9098c85.jpg",
    is_video: false,
    video: null,
    order: 3,
    hotspot_set: [11],
    storyline: 6,
  },
  {
    id: 13,
    uuid: "5dbcc39c-893e-4c04-a9de-b25b63e7b0f4",
    create_datetime: "2021-01-14T17:14:44.888121+01:00",
    modified_datetime: "2021-01-14T17:14:44.888142+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/221a9c73da450c281522121a17444da855167e8e710d997663057fecacb7cab8.jpg",
    is_video: false,
    video: null,
    order: 1,
    hotspot_set: [],
    storyline: 7,
  },
  {
    id: 14,
    uuid: "1923ab0c-5f03-4226-a612-5d12461f5cfd",
    create_datetime: "2021-01-14T17:15:43.497959+01:00",
    modified_datetime: "2021-01-14T17:15:43.497978+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/3a047822fee03857231df9a4abbf085d66f517c11a5f87cd803de81be6f83397.jpg",
    is_video: false,
    video: null,
    order: 3,
    hotspot_set: [12],
    storyline: 7,
  },
  {
    id: 18,
    uuid: "1985a13e-f372-46d8-8683-f0f69d3ed89b",
    create_datetime: "2021-01-14T17:35:15.968004+01:00",
    modified_datetime: "2021-01-14T17:57:17.628213+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/5494e54ad4b3adaad87cc59962108a923253129482ff8760f7de0f332f2ce30a.jpg",
    is_video: true,
    video:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/437b306fd0e086a48f98d0ac66a307cbbe20446f394cf0377e748b46ec6515be.mp4",
    order: 2,
    hotspot_set: [],
    storyline: 7,
  },
  {
    id: 15,
    uuid: "7730f58a-b834-4b01-b784-5ec04ef626bd",
    create_datetime: "2021-01-14T17:15:50.127944+01:00",
    modified_datetime: "2021-01-14T17:15:50.127963+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/3fb2f791098f826fad4bf66c43f5cae4c7409fa0d5bb18941877984c7f6e2e92.jpg",
    is_video: false,
    video: null,
    order: 1,
    hotspot_set: [],
    storyline: 8,
  },
  {
    id: 16,
    uuid: "a80a6e28-99f5-418c-adc3-a5225c56fb77",
    create_datetime: "2021-01-14T17:15:56.637862+01:00",
    modified_datetime: "2021-01-14T17:15:56.637881+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/3aa16ad9d4d0dfbf4a930896964a31f42530d0ea2c08c60acb81b3396471ac14.jpg",
    is_video: false,
    video: null,
    order: 2,
    hotspot_set: [],
    storyline: 8,
  },
  {
    id: 17,
    uuid: "ea31c1fe-20ac-47b3-bcfc-37bc12d7e74b",
    create_datetime: "2021-01-14T17:16:04.687164+01:00",
    modified_datetime: "2021-01-14T17:16:04.687183+01:00",
    markasdelete: false,
    image:
      "https://stories.narraflix.com/uploads/narraflix/2021/1/14/0fec910df4c136e8dc0824ebc6dd038667f4f483eb196d92b37f94aaed8c2ec2.jpg",
    is_video: false,
    video: null,
    order: 3,
    hotspot_set: [13],
    storyline: 8,
  },
];

// //Action to fetch story Lines
// const fetchStoryLines = () => {
//   getAllStoriesLines()
//     .then(resp => {
//       resp.data
//     })
//   return data;
// };
// //Action to fetch hotspots
// const fetchHotSpots = () => {
//   return hotspots;
// };
// //Action to fetch Story Items e.g text,hotspots etc.
// const fetchStoryItems = () => {
//   return storyItems;
// };
export default { fetchStoryLines, fetchHotSpots, fetchStoryItems };
