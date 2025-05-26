
import { FileInput, Label } from "flowbite-react";

export function InputVoice() {
  return (
    <>
      <Label className="mb-2 block" htmlFor="file-upload">
        Upload file
      </Label>
      <FileInput id="file-upload" />
    </>
  );
}
