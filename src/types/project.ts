export interface ProjectProps {
  id: number;
  name: string;
  executionDate: Date;
  description: string[];
  projectBanner: string[];
  projectStack: string[];
  principalStack: string;
  active: boolean;
}
