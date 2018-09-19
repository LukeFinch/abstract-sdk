// @flow
import type {
  ProjectDescriptor,
  ObjectDescriptor,
  BranchDescriptor,
  FileDescriptor,
  PageDescriptor,
  LayerDescriptor,
  CollectionDescriptor
} from "../";

export function buildProjectDescriptor(
  projectDescriptor: *
): ProjectDescriptor {
  return {
    projectId: "project-id",
    ...projectDescriptor
  };
}

export function buildCommitDescriptor(objectDescriptor: *): ObjectDescriptor {
  return {
    projectId: "project-id",
    branchId: "branch-id",
    sha: "commit-sha",
    ...objectDescriptor
  };
}

export function buildBranchDescriptor(branchDescriptor: *): BranchDescriptor {
  return {
    projectId: "project-id",
    branchId: "branch-id",
    ...branchDescriptor
  };
}

export function buildFileDescriptor(fileDescriptor: *): FileDescriptor {
  return {
    projectId: "project-id",
    branchId: "branch-id",
    fileId: "file-id",
    ...fileDescriptor
  };
}

export function buildPageDescriptor(pageDescriptor: *): PageDescriptor {
  return {
    projectId: "project-id",
    branchId: "branch-id",
    fileId: "file-id",
    pageId: "page-id",
    ...pageDescriptor
  };
}

export function buildLayerDescriptor(layerDescriptor: *): LayerDescriptor {
  return {
    projectId: "project-id",
    branchId: "branch-id",
    fileId: "file-id",
    pageId: "page-id",
    layerId: "layer-id",
    ...layerDescriptor
  };
}

export function buildCollectionDescriptor(
  collectionDescriptor: *
): CollectionDescriptor {
  return {
    projectId: "project-id",
    branchId: "branch-id",
    collectionId: "collection-id",
    ...collectionDescriptor
  };
}
