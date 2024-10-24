<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/main.min.css">
    <title>Dynamic Tree</title>
</head>
<body>


<section class="tree">
    <h1 class="tree__title">Dynamic Tree</h1>
    <button id="createRoot" class="tree__create">Create root</button>
    <div id="treeRoot" class="tree__parent"></div>
</section>



<!-- Modal for add item -->
<div id="addNodeModal" class="modal">
  <div class="modal__wrapper">
    <div class="modal__content">
      <h3 class="modal__title">Add New Item</h3>
      <input class="modal__input" type="text" id="nodeNameInput" placeholder="Enter item name">
    </div>
    <div class="modal__footer">
      <span></span>
      <div class="modal__wrapper-btn">
        <button id="confirmAddBtn" class="modal__btn">Add</button>
        <button id="cancelAddBtn" class="modal__btn">Cancel</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal window to confirm deletion -->
<div id="deleteNodeModal" class="modal modal--confirmation">
  <div class="modal__wrapper">
    <div class="modal__content">
      <h3 class="modal__title">Confirm Deletion</h3>
      <p class="modal__notice">This item will be deleted. Continue?</p>
    </div>
    <div class="modal__footer">
      <span id="timer" class="modal__timer">20</span>
      <div class="modal__wrapper-btn">
        <button id="confirmDeleteBtn" class="modal__btn">Confirm</button>
        <button id="cancelDeleteBtn" class="modal__btn">Cancel</button>
      </div>
    </div>
  </div>
</div>


    <script src='./js/main.js'></script>
    <script src='./js/ajax.js'></script>
    <script src='./js/modalAdd.js'></script>
    <script src='./js/modalRemove.js'></script>
</body>
</html>