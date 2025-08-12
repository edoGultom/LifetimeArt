export interface Testimonial {
    rate: number;
    desc: string;
    url: string;
    name: string;
  }

export interface Feedback {
  user: string;
  url: string;
  desc: string;
}

export interface OurWork {
  name: string;
  url: string;
  desc: string;
  type: string;
  weeks: string;
  feedback: Feedback;
}