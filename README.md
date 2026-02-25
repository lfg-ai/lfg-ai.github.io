# LFG: Learning to Drive is a Free Gift

Project page for the CVPR 2026 paper:

**Learning to Drive is a Free Gift: Large-Scale Label-Free Autonomy Pretraining from Unposed In-The-Wild Videos**

Matthew Strong, Wei-Jer Chang, Quentin Herau, Jiezhi Yang, Yihan Hu, Chensheng Peng, Wei Zhan

Applied Intuition | Stanford University | UC Berkeley

## Abstract

LFG learns a unified pseudo-4D representation of geometry, semantics, motion, and short-term future evolution directly from unposed, unlabeled single-view driving videos. A single feedforward encoder processes observed frames and produces temporally consistent predictions of 3D point maps, camera poses, semantic layouts, confidence, and motion masks for both current and future frames.

## Website

Visit the project page: https://lfg-ai.github.io

## Local Development

To view the website locally, you can use Python's built-in HTTP server:

```bash
cd lfg-ai-github.io
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Citation

```bibtex
@inproceedings{strong2026lfg,
  title={Learning to Drive is a Free Gift: Large-Scale Label-Free Autonomy Pretraining from Unposed In-The-Wild Videos},
  author={Strong, Matthew and Chang, Wei-Jer and Herau, Quentin and Yang, Jiezhi and Hu, Yihan and Peng, Chensheng and Zhan, Wei},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2026}
}
```
