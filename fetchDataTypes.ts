type MusicData = {
  title: string;
  items: {
    details: {
      Album: string;
      Artists: string[];
      CoverURL: string;
      Links: { service: string; url: string }[];
    };
  }[];
};

type ShowsData = {
  obj: {

    title: string;
    items: {
      details: {
        title: string;
        artists: string[];
        image_url: string;
        links: { service: string; url: string }[];
      };
    }[];
  }
}
type CrewsData = {
  obj: {

    title: string;
    items: {
      details: {
        name: string;
        image_url: string;
        links: { service: string; url: string }[];
      };
    }[];
  }
}

type MerchData = {
  obj: {
    title: string;
    items: {
      details: {
        price: string,
        title: string;
        image_url: string;
        links: { name: string, service: string; url: string }[];
      };
    }[];
  }
}

type ProfileProps = {
  avatar: string,
  display_name: {
    text: string
  },
  username: string
}[]
