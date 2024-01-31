# AVCR-Net

The official repository for AVCR-Net

## Abstract
> This research introduces the audio-visual command recognition network (AVCR-Net), an advanced model specifically designed for robust audio-visual speech recognition (AVSR). By fine-tuning its architecture, iterative refinement, and the incorporation of a gated mechanism, our model achieves the highest accuracy of 98.87% and 98.81% on the RUSAVIC and LRW corpora, respectively. The proposed multi-prediction strategy demonstrates superior performance compared to traditional single-prediction approaches, showcasing the model's adaptability across diverse audio-visual contexts. The AVCR-Net architecture is founded on the well-established encoder-decoder paradigm with a transformer architecture. The model's uniqueness lies in its ability to bridge the gap between acoustic and visual data, enhancing the recognition process through an iterative refinement step. The AVCR-Net architecture encompasses four primary modules: feature extraction, multimodal fusion, model initialization, and iterative model refinement. Pre-trained extractors transform audio and visual inputs into spatial-temporal features (STF) matrices. A multimodal fusion strategy merges these STFs, creating a comprehensive representation capturing both modalities' information. This representation are use as input data to AVCR-Net's encoder-decoder architecture. This generates an initial data representation and probability prediction, laying the foundation for the model. Iterative model refinement introduces, operating on the initial data representation. This refinement involves multiple steps, producing the sequences of data representations and probability predictions. The final prediction vector results from averaging all probability predictions, ensuring enhanced stability and robustness. This research also presents a comprehensive review of recent audio-visual speech corpora and state-of-the-art approaches. In addition, its relevance to AVSR, the research has wider implications for advancing human-computer interaction. The capabilities of AVCR-Net extend its impact beyond AVSR, making it a valuable contribution to the intersection of audio-visual processing and artificial intelligence.

## Acknowledgments

Parts of this project page were adopted from the [Nerfies](https://nerfies.github.io/) page.

## Website License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
