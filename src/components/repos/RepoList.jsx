import RepoItem from "./RepoItem"

function RepoList() {
  return (
    <div>
        <RepoItem key={repo.id} repo={repo}/> 
    </div>
  )
}

export default RepoList