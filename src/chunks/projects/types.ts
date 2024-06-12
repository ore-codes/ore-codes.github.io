type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

interface Project {
  description: string;
  industry: string;
  link: string;
  title: string;
  year: number;
}

type SelectedProject = Project & { thumb: ImageMetadata };
type DemoProject = PartialBy<Project, 'link'> & {
  github: string;
  storybook?: string;
};

export type { DemoProject, SelectedProject };
