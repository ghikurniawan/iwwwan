"use client";

import { Group, InputGroup, Label } from "@/components/ui/input-group";
import { ReloadIcon } from "@radix-ui/react-icons";

const TagsGenerator = () => {
  return (
    <div className="max-w-sm">
      <Group>
        <Label htmlFor="input-goup">
          <ReloadIcon className="h-4 w-4 animate-spin" />
        </Label>
        <InputGroup id="input-goup" type="text" />
      </Group>
    </div>
  );
};

export default TagsGenerator;
