import React from "react";
import CommentCard from "./CommentCard";
import { comments } from "../data/data";

const Comments = () => {
  return (
    <section className="mt-20 relative">
      <div className="my-container my-text">
        {/* title */}
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <h1 className="text-[32px] relative font-bold tracking-tight my-title-after">
              نظرات
            </h1>
            <svg
              width="15"
              height="14"
              stroke="currentColor"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.6616 6.14942L13.4866 4.84949L12.3492 4.34951C12.1867 4.29952 12.0492 4.19952 11.9617 4.03703C11.8742 3.87454 11.8742 3.68705 11.9367 3.51206L12.5866 1.69965L10.6242 2.7496C10.4618 2.82459 10.2743 2.8121 10.1243 2.7496C9.97428 2.6871 9.86179 2.56211 9.81179 2.41212L9.31182 1.43717L8.47436 2.22463C8.23687 2.42462 7.91189 2.41212 7.6744 2.22463L5.812 0.699707L4.91205 2.21213C4.76206 2.49961 4.39958 2.61211 4.09959 2.47461L1.81221 1.38717L2.32468 3.19958C2.37468 3.36207 2.34968 3.54956 2.24969 3.69955C2.16219 3.84954 2.0122 3.94954 1.83721 3.97453L0.987255 4.12453L1.37473 4.82449C1.47473 4.94948 1.51223 5.11197 1.48723 5.27447C1.46223 5.44946 1.36224 5.61195 1.21224 5.69944L0.0498047 6.4494L1.59972 7.21186C1.78721 7.29936 1.91221 7.46185 1.9497 7.64934C1.9872 7.83683 1.93721 8.02432 1.81221 8.17431L1.13725 9.14926L2.1122 9.31175C2.31219 9.33675 2.48718 9.46175 2.58717 9.63674C2.68717 9.82423 2.68717 10.0367 2.58717 10.2242L0.499781 13.9615L4.36208 11.2741C4.51207 11.1617 4.71206 11.1367 4.88705 11.1867C5.06204 11.2367 5.21203 11.3741 5.28703 11.5491L5.29953 11.5866L5.53702 12.3866L7.37442 11.2492C7.57441 11.1117 7.84939 11.1117 8.04938 11.2367L9.51181 12.1241L9.71179 11.2866C9.73679 11.1117 9.84929 10.9492 9.99928 10.8617C10.1618 10.7617 10.3618 10.7492 10.5368 10.8117L12.6491 11.5991L11.9742 9.62424C11.8992 9.46175 11.9117 9.27426 11.9867 9.11176C12.0617 8.94927 12.2117 8.82428 12.3867 8.78678L14.0241 8.29931L12.6866 6.93688C12.4866 6.73689 12.4866 6.38691 12.6616 6.14942Z" />
            </svg>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col gap-4 mt-5 h-170 overflow-hidden relative">
          {comments.map((comment) => (
            <CommentCard key={comment.id} {...comment} />
          ))}

          {/* fade effect */}
          <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-white dark:from-dark-background to-transparent pointer-events-none" />

        </div>
        <button className="w-full bg-primary text-white font-bold p-3 text-lg rounded-full">دیدن همه</button>
      </div>
    </section>
  );
};

export default Comments;
