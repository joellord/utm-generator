class UTMGenerator {
  _target;
  _source;
  _campaign;
  _medium;
  _content;
  _term;

  constructor(props) {
    if (!props) props = {};
    if (props.target) this.setTarget(props.target);
    if (props.source) this.setSource(props.source);
    if (props.campaign) this.setCampaign(props.campaign);
    if (props.medium) this.setMedium(props.medium);
    if (props.content) this.setContent(props.content);
    if (props.term) this.setTerm(props.term);
  }
  
  setTarget(target) {
    if (!target.match(/^(https?:\/\/)/)) {
      target = `http://${target}`;
    }
    this._target = target;
  }

  setSource(source) {
    this._source = source;
  }

  setCampaign(campaign) {
    this._campaign = campaign;
  }

  setMedium(medium) {
    this._medium = medium;
  }

  setContent(content) {
    this._content = content;
  }

  setTerm(term) {
    this._term = term;
  }

  getLink() {
    if (!this._target) throw new Error("You need to provide a target link.");
    let codes = ["source", "campaign", "medium", "content", "term"];
    let link = `${this._target}/?`;
    codes.map(code => {
      if (!this[`_${code}`]) return;
      link += `utm_${code}=${encodeURIComponent(this["_" + code])}&`;
    });
    link = link.substr(0, link.length - 1);
    return link;
  }
}


module.exports = UTMGenerator;