import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShortPost = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Short" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Latest Posts</SelectItem>
          <SelectItem value="banana">Newest Posts</SelectItem>
          <SelectItem value="blueberry">Most popular posts</SelectItem>
          <SelectItem value="grapes">By like count</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ShortPost;
