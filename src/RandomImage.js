import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

class ShareButton extends React.Component {
  render() {
    const { url, platform } = this.props;

    let ShareComponent;
    if (platform === 'facebook') {
      ShareComponent = FacebookShareButton;
    } else if (platform === 'twitter') {
      ShareComponent = TwitterShareButton;
    } else if (platform === 'whatsapp') {
      ShareComponent = WhatsappShareButton;
    }

    return (
      <ShareComponent url={url}>
        {`Share on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
      </ShareComponent>
    );
  }
}

export default ShareButton;
