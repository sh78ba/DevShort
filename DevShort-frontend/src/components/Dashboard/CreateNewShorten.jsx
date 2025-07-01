import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '../TextField';
import { Tooltip } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';
import api from '../../api/api';
import toast from 'react-hot-toast';
import { useStoreContext } from '../../contextApi/ContextApi';

const CreateNewShorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true);
    try {
      const { data: res } = await api.post("/api/urls/shorten", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const shortenUrl = `${import.meta.env.VITE_REACT_FRONT_END_URL}/${res.shortUrl}`;

      await navigator.clipboard.writeText(shortenUrl);
      toast.success("Short URL copied to clipboard", {
        position: "bottom-center",
        className: "mb-5",
        duration: 3000,
      });

      reset();
      setOpen(false);
      if (refetch) await refetch();
    } catch (error) {
      toast.error("Failed to create short URL");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-white rounded-md">
      <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className="sm:w-[450px] w-[360px] relative shadow-custom pt-8 pb-5 sm:px-8 px-4 rounded-lg"
      >
        <h1 className="font-montserrat text-center font-bold sm:text-2xl text-[22px] text-slate-800">
          Create New Shorten URL
        </h1>

        <hr className="mt-2 sm:mb-5 mb-3 text-slate-950" />

        <TextField
          label="Enter URL"
          required
          id="originalUrl"
          placeholder="https://example.com"
          type="url"
          message="URL is required"
          register={register}
          errors={errors}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white w-32 py-2 transition-colors rounded-md my-3"
        >
          {loading ? "Loading..." : "Create"}
        </button>

        {!loading && (
          <Tooltip title="Close">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2"
            >
              <RxCross2 className="text-slate-800 text-3xl" />
            </button>
          </Tooltip>
        )}
      </form>
    </div>
  );
};

export default CreateNewShorten;
