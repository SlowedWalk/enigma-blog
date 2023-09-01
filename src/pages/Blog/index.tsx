import { useGetPostsQuery } from '../../api/postSlice';
import Button from "../../base-components/Button";
import { FormInput, FormSelect } from "../../base-components/Form";
import { Menu } from "../../base-components/Headless";
import LoadingIcon from "../../base-components/LoadingIcon";
import Lucide from "../../base-components/Lucide";
import Pagination from "../../base-components/Pagination";
import Tippy from "../../base-components/Tippy";
import { timeAgo } from '../../utils/helper';

function Main() {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery('getPosts');

  let content: string | JSX.Element = '';

  if (isLoading) {
    content =
      <div className="flex flex-col mt-10 items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
        <LoadingIcon icon="oval" className="w-8 h-8" />
        <div className="mt-2 text-xs text-center">
          <h3 className="text-lg"> Loading ...</h3>
        </div>
      </div>;
  } else if (isSuccess) {
    content =
      <div className="grid grid-cols-12 gap-6 mt-5 intro-y">
        {/* BEGIN: Blog Layout */}
        {posts.ids.map((id: number) => (
          <div
            key={id}
            className="col-span-12 intro-y md:col-span-6 xl:col-span-4 box"
          >
            <div className="flex items-center px-5 py-4 border-b border-slate-200/60 dark:border-darkmode-400">
              <div className="flex-none w-10 h-10 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src={posts.entities[id].imageUrl}
                />
              </div>
              <div className="ml-3 mr-auto">
                <a href="" className="font-medium">
                  {posts.entities.author}
                </a>
                <div className="flex text-slate-500 truncate text-xs mt-0.5">
                  <a className="inline-block truncate text-primary" href="">
                    {posts.entities.category[0]}
                  </a>
                  <span className="mx-1">•</span> {timeAgo(posts.entities.createdAt)}
                </div>
              </div>
              <Menu className="ml-3">
                <Menu.Button as="a" className="w-5 h-5 text-slate-500">
                  <Lucide icon="MoreVertical" className="w-5 h-5" />
                </Menu.Button>
                <Menu.Items className="w-40">
                  <Menu.Item>
                    <Lucide icon="Edit2" className="w-4 h-4 mr-2" /> Edit Post
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete Post
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
            <div className="p-5">
              <div className="h-40 2xl:h-56 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-md"
                  src={posts.entities[id].imageUrl}
                />
              </div>
              <a href="" className="block mt-5 text-base font-medium">
                {posts.entities[id].title}
              </a>
              <div className="mt-2 text-slate-600 dark:text-slate-500">
                {posts.entities[id].excerpt}
              </div>
            </div>
            <div className="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400">
              <Tippy
                as="a"
                href=""
                className="flex items-center justify-center w-8 h-8 mr-2 border rounded-full intro-x border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500"
                content="Bookmark"
              >
                <Lucide icon="Bookmark" className="w-3 h-3" />
              </Tippy>
              {/* <div className="flex mr-2 intro-x">
                <div className="w-8 h-8 intro-x image-fit">
                  <Tippy
                    as="img"
                    alt="Midone Tailwind HTML Admin Template"
                    className="border border-white rounded-full zoom-in"
                    src={faker.photos[0]}
                    content={faker.users[0].name}
                  />
                </div>
                <div className="w-8 h-8 -ml-4 intro-x image-fit">
                  <Tippy
                    as="img"
                    alt="Midone Tailwind HTML Admin Template"
                    className="border border-white rounded-full zoom-in"
                    src={faker.photos[1]}
                    content={faker.users[1].name}
                  />
                </div>
                <div className="w-8 h-8 -ml-4 intro-x image-fit">
                  <Tippy
                    as="img"
                    alt="Midone Tailwind HTML Admin Template"
                    className="border border-white rounded-full zoom-in"
                    src={faker.photos[2]}
                    content={faker.users[2].name}
                  />
                </div>
              </div> */}
              <Tippy
                as="a"
                href=""
                className="flex items-center justify-center w-8 h-8 ml-auto rounded-full intro-x text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300"
                content="Share"
              >
                <Lucide icon="Share2" className="w-3 h-3" />
              </Tippy>
              <Tippy
                as="a"
                href=""
                className="flex items-center justify-center w-8 h-8 ml-2 text-white rounded-full intro-x bg-primary"
                content="Download PDF"
              >
                <Lucide icon="Share" className="w-3 h-3" />
              </Tippy>
            </div>
            <div className="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <div className="flex w-full text-xs text-slate-500 sm:text-sm">
                <div className="mr-2">
                  Comments:{" "}
                  <span className="font-medium">{posts.entities[id].comments}</span>
                </div>
                <div className="mr-2">
                  Views: <span className="font-medium">{posts.entities[id].views}k</span>
                </div>
                <div className="ml-auto">
                  Likes: <span className="font-medium">{posts.entities[id].likes}k</span>
                </div>
              </div>
              <div className="flex items-center w-full mt-3">
                <div className="flex-none w-8 h-8 mr-3 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={posts.entities[id].imageUrl}
                  />
                </div>
                <div className="relative flex-1 text-slate-600">
                  <FormInput
                    rounded
                    type="text"
                    className="pr-10 border-transparent bg-slate-100"
                    placeholder="Post a comment..."
                  />
                  <Lucide
                    icon="Smile"
                    className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* END: Blog Layout */}
      </div>
  } else if (isError) {
    content =
      <div className="flex flex-col mt-10 items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
        <Lucide icon="AlertTriangle" className="w-8 h-8 text-red-500" />
        <div className="mt-2 text-xs text-center">

          <h3 className="text-lg"> {error}</h3>
        </div>
      </div>;
  }
  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Blog Layout</h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            <a href="blog/create">Add New Post</a>
          </Button>
          <Menu className="ml-auto sm:ml-0">
            <Menu.Button as={Button} className="px-2 !box">
              <span className="flex items-center justify-center w-5 h-5">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </Menu.Button>
            <Menu.Items className="w-40">
              <Menu.Item>
                <Lucide icon="Share2" className="w-4 h-4 mr-2" /> Share Post
              </Menu.Item>
              <Menu.Item>
                <Lucide icon="Download" className="w-4 h-4 mr-2" /> Download
                Post
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      {content}
      {/* BEGIN: Pagination */}
      <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap">
        <Pagination className="w-full sm:w-auto sm:mr-auto">
          <Pagination.Link>
            <Lucide icon="ChevronsLeft" className="w-4 h-4" />
          </Pagination.Link>
          <Pagination.Link>
            <Lucide icon="ChevronLeft" className="w-4 h-4" />
          </Pagination.Link>
          <Pagination.Link>...</Pagination.Link>
          <Pagination.Link>1</Pagination.Link>
          <Pagination.Link active>2</Pagination.Link>
          <Pagination.Link>3</Pagination.Link>
          <Pagination.Link>...</Pagination.Link>
          <Pagination.Link>
            <Lucide icon="ChevronRight" className="w-4 h-4" />
          </Pagination.Link>
          <Pagination.Link>
            <Lucide icon="ChevronsRight" className="w-4 h-4" />
          </Pagination.Link>
        </Pagination>
        <FormSelect className="w-20 mt-3 !box sm:mt-0">
          <option>10</option>
          <option>25</option>
          <option>35</option>
          <option>50</option>
        </FormSelect>
      </div>
      {/* END: Pagination */}
    </>
  );
}

export default Main;
