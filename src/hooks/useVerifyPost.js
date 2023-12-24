import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { verifyPost } from "../service/post.service";

export const useVerifyPost = (props) => {
  const queryClient = useQueryClient();

  return useMutation(verifyPost, {
    onSuccess: ({ data }) => {
      toast("Post successfully verified.");
      queryClient.invalidateQueries(["pending-posts"]);
      queryClient.invalidateQueries(["popular-posts"]);
      queryClient.invalidateQueries(["all-posts"]);
      queryClient.invalidateQueries(["user-posts"]);
    },
    ...props,
  });
};
