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
