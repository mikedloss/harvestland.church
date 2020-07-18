export interface GatsbyImageSharpFluid {
  aspectRatio: number;
  base64: string;
  sizes: string;
  src: string;
  srcSet: string;
}

export interface ChildImageSharp {
  childImageSharp: {
    fluid: GatsbyImageSharpFluid;
  };
}

export interface LeaderShape {
  name: string;
  email: string;
  jobs: string[];
  picture: {
    title: string;
    fluid: {
      src: string;
    };
  };
}
