import { GithubUser } from './githubUser.interface';

export interface GithubUsersResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GithubUser[];
}
