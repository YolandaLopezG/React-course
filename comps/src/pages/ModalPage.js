import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handlerClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here some text</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handlerClick} primary>
        Open modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        velit vulputate, vestibulum ante quis, ultrices lacus. Integer vehicula
        dolor et risus pulvinar dapibus et a arcu. Pellentesque consequat ante
        sit amet justo volutpat facilisis. Nam mollis pharetra velit. Morbi id
        metus lorem. Ut convallis mattis enim nec efficitur. Nullam vitae justo
        est. Nulla malesuada leo non augue molestie, in porttitor velit
        facilisis. Nam cursus condimentum felis, et placerat felis venenatis
        non. Mauris et lobortis ante. Maecenas pretium rhoncus purus at euismod.
        Nam eget massa sed urna volutpat laoreet vel quis est. Nam in ligula
        metus. Mauris finibus felis nec tellus gravida, ut semper nisi finibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        velit vulputate, vestibulum ante quis, ultrices lacus. Integer vehicula
        dolor et risus pulvinar dapibus et a arcu. Pellentesque consequat ante
        sit amet justo volutpat facilisis. Nam mollis pharetra velit. Morbi id
        metus lorem. Ut convallis mattis enim nec efficitur. Nullam vitae justo
        est. Nulla malesuada leo non augue molestie, in porttitor velit
        facilisis. Nam cursus condimentum felis, et placerat felis venenatis
        non. Mauris et lobortis ante. Maecenas pretium rhoncus purus at euismod.
        Nam eget massa sed urna volutpat laoreet vel quis est. Nam in ligula
        metus. Mauris finibus felis nec tellus gravida, ut semper nisi finibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        velit vulputate, vestibulum ante quis, ultrices lacus. Integer vehicula
        dolor et risus pulvinar dapibus et a arcu. Pellentesque consequat ante
        sit amet justo volutpat facilisis. Nam mollis pharetra velit. Morbi id
        metus lorem. Ut convallis mattis enim nec efficitur. Nullam vitae justo
        est. Nulla malesuada leo non augue molestie, in porttitor velit
        facilisis. Nam cursus condimentum felis, et placerat felis venenatis
        non. Mauris et lobortis ante. Maecenas pretium rhoncus purus at euismod.
        Nam eget massa sed urna volutpat laoreet vel quis est. Nam in ligula
        metus. Mauris finibus felis nec tellus gravida, ut semper nisi finibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        velit vulputate, vestibulum ante quis, ultrices lacus. Integer vehicula
        dolor et risus pulvinar dapibus et a arcu. Pellentesque consequat ante
        sit amet justo volutpat facilisis. Nam mollis pharetra velit. Morbi id
        metus lorem. Ut convallis mattis enim nec efficitur. Nullam vitae justo
        est. Nulla malesuada leo non augue molestie, in porttitor velit
        facilisis. Nam cursus condimentum felis, et placerat felis venenatis
        non. Mauris et lobortis ante. Maecenas pretium rhoncus purus at euismod.
        Nam eget massa sed urna volutpat laoreet vel quis est. Nam in ligula
        metus. Mauris finibus felis nec tellus gravida, ut semper nisi finibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        velit vulputate, vestibulum ante quis, ultrices lacus. Integer vehicula
        dolor et risus pulvinar dapibus et a arcu. Pellentesque consequat ante
        sit amet justo volutpat facilisis. Nam mollis pharetra velit. Morbi id
        metus lorem. Ut convallis mattis enim nec efficitur. Nullam vitae justo
        est. Nulla malesuada leo non augue molestie, in porttitor velit
        facilisis. Nam cursus condimentum felis, et placerat felis venenatis
        non. Mauris et lobortis ante. Maecenas pretium rhoncus purus at euismod.
        Nam eget massa sed urna volutpat laoreet vel quis est. Nam in ligula
        metus. Mauris finibus felis nec tellus gravida, ut semper nisi finibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        velit vulputate, vestibulum ante quis, ultrices lacus. Integer vehicula
        dolor et risus pulvinar dapibus et a arcu. Pellentesque consequat ante
        sit amet justo volutpat facilisis. Nam mollis pharetra velit. Morbi id
        metus lorem. Ut convallis mattis enim nec efficitur. Nullam vitae justo
        est. Nulla malesuada leo non augue molestie, in porttitor velit
        facilisis. Nam cursus condimentum felis, et placerat felis venenatis
        non. Mauris et lobortis ante. Maecenas pretium rhoncus purus at euismod.
        Nam eget massa sed urna volutpat laoreet vel quis est. Nam in ligula
        metus. Mauris finibus felis nec tellus gravida, ut semper nisi finibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        velit vulputate, vestibulum ante quis, ultrices lacus. Integer vehicula
        dolor et risus pulvinar dapibus et a arcu. Pellentesque consequat ante
        sit amet justo volutpat facilisis. Nam mollis pharetra velit. Morbi id
        metus lorem. Ut convallis mattis enim nec efficitur. Nullam vitae justo
        est. Nulla malesuada leo non augue molestie, in porttitor velit
        facilisis. Nam cursus condimentum felis, et placerat felis venenatis
        non. Mauris et lobortis ante. Maecenas pretium rhoncus purus at euismod.
        Nam eget massa sed urna volutpat laoreet vel quis est. Nam in ligula
        metus. Mauris finibus felis nec tellus gravida, ut semper nisi finibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        velit vulputate, vestibulum ante quis, ultrices lacus. Integer vehicula
        dolor et risus pulvinar dapibus et a arcu. Pellentesque consequat ante
        sit amet justo volutpat facilisis. Nam mollis pharetra velit. Morbi id
        metus lorem. Ut convallis mattis enim nec efficitur. Nullam vitae justo
        est. Nulla malesuada leo non augue molestie, in porttitor velit
        facilisis. Nam cursus condimentum felis, et placerat felis venenatis
        non. Mauris et lobortis ante. Maecenas pretium rhoncus purus at euismod.
        Nam eget massa sed urna volutpat laoreet vel quis est. Nam in ligula
        metus. Mauris finibus felis nec tellus gravida, ut semper nisi finibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        velit vulputate, vestibulum ante quis, ultrices lacus. Integer vehicula
        dolor et risus pulvinar dapibus et a arcu. Pellentesque consequat ante
        sit amet justo volutpat facilisis. Nam mollis pharetra velit. Morbi id
        metus lorem. Ut convallis mattis enim nec efficitur. Nullam vitae justo
        est. Nulla malesuada leo non augue molestie, in porttitor velit
        facilisis. Nam cursus condimentum felis, et placerat felis venenatis
        non. Mauris et lobortis ante. Maecenas pretium rhoncus purus at euismod.
        Nam eget massa sed urna volutpat laoreet vel quis est. Nam in ligula
        metus. Mauris finibus felis nec tellus gravida, ut semper nisi finibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        velit vulputate, vestibulum ante quis, ultrices lacus. Integer vehicula
        dolor et risus pulvinar dapibus et a arcu. Pellentesque consequat ante
        sit amet justo volutpat facilisis. Nam mollis pharetra velit. Morbi id
        metus lorem. Ut convallis mattis enim nec efficitur. Nullam vitae justo
        est. Nulla malesuada leo non augue molestie, in porttitor velit
        facilisis. Nam cursus condimentum felis, et placerat felis venenatis
        non. Mauris et lobortis ante. Maecenas pretium rhoncus purus at euismod.
        Nam eget massa sed urna volutpat laoreet vel quis est. Nam in ligula
        metus. Mauris finibus felis nec tellus gravida, ut semper nisi finibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        velit vulputate, vestibulum ante quis, ultrices lacus. Integer vehicula
        dolor et risus pulvinar dapibus et a arcu. Pellentesque consequat ante
        sit amet justo volutpat facilisis. Nam mollis pharetra velit. Morbi id
        metus lorem. Ut convallis mattis enim nec efficitur. Nullam vitae justo
        est. Nulla malesuada leo non augue molestie, in porttitor velit
        facilisis. Nam cursus condimentum felis, et placerat felis venenatis
        non. Mauris et lobortis ante. Maecenas pretium rhoncus purus at euismod.
        Nam eget massa sed urna volutpat laoreet vel quis est. Nam in ligula
        metus. Mauris finibus felis nec tellus gravida, ut semper nisi finibus.
      </p>
    </div>
  );
}

export default ModalPage;
