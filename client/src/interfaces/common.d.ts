import { ReactNode } from 'react';
import { FieldValues } from 'react-hook-form';
import { FormEventHandler } from 'react';
import { CreateResponse, UpdateResponse, BaseRecord } from '@refinedev/core';

export interface CustomButtonProps {
    type?: string;
    title: string;
    backgroundColor: string;
    color: string;
    fullWidth?: boolean;
    icon?: ReactNode;
    disabled?: boolean;
    handleClick?: () => void;
}

export interface ProfileProps {
    type: string;
    name: string;
    avatar: string;
    email: string;
    properties: Array <string>;
}

export interface PropertyProps {
    _id: string;
    title: string;
    description: string;
    location: string;
    price: string;
    photo: string;
    creator: string;
}

export interface FormProps {
    type: string;
    register: UseFormRegister<FieldValues>;
    onFinish: (
      values: FieldValues,
    ) => Promise<
      void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>
    >;
    formLoading: boolean;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    handleImageChange: (file: File) => void;
    onFinishHandler: SubmitHandler<FieldValues>;
    propertyImage: { name: string; url: string };
  }