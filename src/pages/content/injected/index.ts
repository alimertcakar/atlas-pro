/**
 * DO NOT USE import someModule from '...';
 *
 * @issue-url https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite/issues/160
 *
 * Chrome extensions don't support modules in content scripts.
 * If you want to use other modules in content scripts, you need to import them via these files.
 *
 */
import('@root/src/shared/storages/mainStorage');

if (window.location.host === 'bitbucket.org') {
  document.body.classList.add('atlassian_pro_enabled');
}

// text nodes needs to be wrapped in span elements in order to be styled

function wrapTextNodes(spanElement) {
  var childNodes = spanElement.childNodes;

  childNodes.forEach(function (node) {
    if (node.nodeType === Node.TEXT_NODE) {
      var span = document.createElement('span');
      span.textContent = node.textContent;
      node.parentNode.replaceChild(span, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      wrapTextNodes(node);
    }
  });
}

const wrapAllTextNodesInsideCode = () => {
  document.querySelectorAll('.code-component .css-0').forEach(function (node) {
    wrapTextNodes(node);
  });
};

const config = { childList: true, subtree: true };

const callback = function (mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1 && node.classList.contains('.code-component')) {
          wrapAllTextNodesInsideCode();
        }
      });
    }
  }
};

const observer = new MutationObserver(callback);

const targetNode = document.querySelector('body');
observer.observe(targetNode, config);
