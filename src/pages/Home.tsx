import { useEffect, useLayoutEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ImageUploading, { ImageListType } from "react-images-uploading";
import axios from "axios";
import { Input } from "../components/Input/Input";
import { Responsive } from "../components/Responsive/Responsive";
import { useParams } from "react-router-dom";
import { PaginationComponent } from "../components/PaginationComponent/PaginationComponent";

type PostForm = {
  text: string;
  lesson_num: number;
  title: string;
  description: string;
};

export const Home = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const [bg, setBg] = useState("bg-red");
  useLayoutEffect(() => {
    setBg("bg-[green]");
  }, []);

  return (
    <div className="flex flex-col gap-3 max-w-[300px] m-auto">
      <div className={`w-[40px] h-[40px] ${bg}`}></div>
      {/* <form
        id="form"
        onSubmit={handleSubmit(onSubmit, onSubmitFail)}
        className="flex flex-col gap-3"
      > */}
      <div className="w-[150px]">
        <Input rightIcon={<div>+</div>} mode="withBorder" />
      </div>
      <PaginationComponent
        allPagesCount={50}
        currentPageNumber={currentPage}
        handlePageClick={(pageNumber: number) => setCurrentPage(pageNumber)}
      />
      {/* <input
          placeholder="title"
          {...register("title", {
            required: "Обязательное поле",
          })}
        ></input>
        <Input
          {...register("title", {
            required: "Обязательное поле",
          })}
          aboba="asd"
        />
        {formState.errors.title && (
          <span className="text-[red]">{formState.errors.title.message}</span>
        )} */}
      {/* <input
          placeholder="lesson_num"
          {...register("lesson_num", {
            required: "Обязательное поле",
          })}
        ></input>
        {formState.errors["lesson_num"] && (
          <span className="text-[red]">
            {formState.errors["lesson_num"]?.message}
          </span>
        )}
        <input
          placeholder="description"
          {...register("description", {
            required: "Обязательное поле",
          })}
        ></input>
        {formState.errors.description && (
          <span className="text-[red]">
            {formState.errors.description?.message}
          </span>
        )}
        <input
          placeholder="text"
          {...register("text", {
            required: "Обязательное поле",
          })}
        ></input>
        {formState.errors.text && (
          <span className="text-[red]">{formState.errors.text?.message}</span>
        )}
      </form>
      <ImageUploading value={images} onChange={onChange}>
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => {
          return (
            <div className="flex flex-col gap-3 mb-[50px]">
              {!imageList.length && (
                <button
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={() => {
                    console.log("asd");

                    setImagesError(() => "");
                    onImageUpload();
                  }}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
              )}
              {imageList.map((image, index) => (
                <div key={index} className="w-[200px] h-[200px]">
                  <img
                    src={image["dataURL"]}
                    alt=""
                    className="w-[200px] h-[200px]"
                  />
                  <div className="flex justify-between mt-[10px]">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
              {imagesError && <span className="text-[red]">{imagesError}</span>}
            </div>
          );
        }}
      </ImageUploading> */}
      <Responsive min={320} max={540}>
        <button type="submit" form="form">
          submit
        </button>
      </Responsive>
    </div>
  );
};
