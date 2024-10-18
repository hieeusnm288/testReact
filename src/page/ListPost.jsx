import React, { useState } from "react";
import CardPost from "../components/CardPost";
import { Button, Modal, Form, Input } from "antd";
import DetailPost from "./DetialPost";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;
function ListPost() {
  const [listPost, setListPost] = useState([
    {
      id: 1,
      title: "New Post 1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      title: "New Post 2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      title: "New Post 3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      title: "New Post 4",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 5,
      title: "New Post 5",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [detailPost, setDetailPost] = useState();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    if (editingPost) {
      // Update the existing post
      setListPost(
        listPost.map((post) =>
          post.id === editingPost.id ? { ...post, ...values } : post
        )
      );
    } else {
      // Add a new post
      const newPost = {
        id: listPost.length + 1,
        title: values.title,
        content: values.content,
      };
      setListPost([...listPost, newPost]);
    }
    setIsModalOpen(false);
    setEditingPost(null);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleDelete = (postId) => {
    setListPost(listPost.filter((post) => post.id !== postId));
    console.log("!23");
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };
  const navigate = useNavigate();

  const detail = (post) => {
    setDetailPost(post);
    navigate(`/${post.id}}`);
  };
  return (
    <>
      <div className="container mt-5">
        <Button type="primary" onClick={showModal} className="mt-3">
          Add New
        </Button>
        <div className="d-flex justify-content-center flex-wrap ">
          {listPost.map((i) => (
            <>
              <CardPost post={i} />
              <button
                type="button"
                class="btn btn-warning mt-3 mx-3"
                onClick={() => handleEdit(i)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger mt-3"
                onClick={() => handleDelete(i.id)}
              >
                Delete
              </button>
            </>
          ))}
        </div>

        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            initialValues={editingPost || { title: "", content: "" }} // Set initial values for edit mode
          >
            <Form.Item
              label="title"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="content"
              name="content"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default ListPost;
